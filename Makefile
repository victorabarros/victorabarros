APP_NAME?=victorabarros
APP_DIR = /src/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18

YELLOW=$(shell printf '\033[0;1;33m')
COLOR_OFF=$(shell printf '\033[0;1;0m')

clean-up:
	@echo "${YELLOW}Removing containers${COLOR_OFF}"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker rm -f

debug:
	@echo "${YELLOW}Debug mode${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8092:80 --rm --name ${APP_NAME}-debug ${DOCKER_BASE_IMAGE} bash

debug-python:
	@echo "${YELLOW}Debug python mode${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8093:80 --rm --name ${APP_NAME}-python-debug python:3.8 bash

run-web:
	@clear
	@echo "${YELLOW}Running python app at http://localhost:8094/${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8094:80 --rm --name ${APP_NAME}-python python:3.8 \
		sh -c "\
			pip3 install -q -r requirements.txt && \
			python3 web/app.py"

ips:
	@echo "${YELLOW}ips${COLOR_OFF}"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'

screen-mobile:
	scrcpy \
		--window-x 1950 \
		--window-height 850

clean-node-modules:
	@npx npkill
