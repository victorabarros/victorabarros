APP_NAME?=victorabarros
APP_DIR = /src/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18

clean-up:
	@docker rm -f ${APP_NAME}-debug

debug:
	@echo "\e[1m\033[33m\nDebug mode\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8092:80 --rm --name ${APP_NAME}-debug ${DOCKER_BASE_IMAGE} bash

debug-python:
	@echo "\e[1m\033[33m\nDebug mode\e[0m"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8092:80 --rm --name ${APP_NAME}-debug python:3.8 bash
