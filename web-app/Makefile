APP_NAME?=victorbarros-website
APP_DIR = /app/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18

YELLOW=$(shell printf '\033[0;1;33m')
COLOR_OFF=$(shell printf '\033[0;1;0m')

run:
	@clear
	@echo "${YELLOW}Running app at http://localhost:8094/${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8094:3000 --rm --name ${APP_NAME} node:latest \
		sh -c "yarn start"
