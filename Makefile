APP_NAME?=victorabarros
APP_DIR = /src/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18

clean-up:
	@echo "\e[1m\033[33mRemoving containers\e[0m"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker rm -f 

debug:
	@echo "\e[1m\033[33mDebug mode\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8092:80 --rm --name ${APP_NAME}-debug ${DOCKER_BASE_IMAGE} bash

debug-python:
	@echo "\e[1m\033[33mDebug python mode\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8093:80 --rm --name ${APP_NAME}-python-debug python:3.8 bash

run-python:
	@clear
	@echo "\e[1m\033[33mRunning python app at http://localhost:8094/\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8094:80 --rm --name ${APP_NAME}-python python:3.8 \
		sh -c "\
			pip3 install -q -r requirements.txt && \
			python3 web/app.py"

ips:
	@echo "\e[1m\033[33mips\e[0m"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'
