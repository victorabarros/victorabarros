APP_NAME?=victorabarros
APP_DIR = /src/${APP_NAME}
PWD=$(shell pwd)
DOCKER_BASE_IMAGE=node:12.18
COMMAND?=bash
PORT?=8092

YELLOW=$(shell printf '\033[0;1;33m')
COLOR_OFF=$(shell printf '\033[0;1;0m')

clean-up:
	@echo "${YELLOW}Removing containers${COLOR_OFF}"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker rm -f

debug:
	@echo "${YELLOW}Debug mode${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p ${PORT}:80 --rm --name ${APP_NAME}-debug ${DOCKER_BASE_IMAGE} ${COMMAND}

debug-python:
	@echo "${YELLOW}Debug python mode${COLOR_OFF}"
	@docker run -it -v ${PWD}:${APP_DIR} -w ${APP_DIR} \
		-p 8093:80 --rm --name ${APP_NAME}-python-debug python:3.8 bash

ips:
	@echo "${YELLOW}ips${COLOR_OFF}"
	@docker ps -q --filter "name=${APP_NAME}" | xargs docker inspect -f \
		'{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'

screen-mobile:
	scrcpy --window-x 1950 --window-height 850

clean-node-modules:
	@npx npkill

download-youtube-video:
	@make debug DOCKER_BASE_IMAGE=mikenye/youtube-dl:latest COMMAND="${VIDEO} --remux-video mp4"

# Git

commit-llm-generated:
	@msg_file="$$(mktemp)"; \
	{ \
		printf '%s\n\n' 'Write the final git commit message for the staged changes.'; \
		printf '%s\n' 'Return only the commit message text that should be passed to git commit.'; \
		printf '%s\n' 'Do not repeat these instructions.'; \
		printf '%s\n' 'Do not include markdown, code examples, code fences, labels, quotes, explanations, or diff summaries.'; \
		printf '%s\n' 'Use imperative mood.'; \
		printf '%s\n' 'Keep the subject line under 72 characters.'; \
		printf '%s\n' 'Add a short body only if it materially improves clarity.'; \
		printf '%s\n' 'If there is a body, separate it from the subject with one blank line.'; \
		printf '\n%s\n' 'git status --short:'; \
		git status --short; \
		printf '\n%s\n' 'git diff --cached --stat:'; \
		git diff --cached --stat; \
		printf '\n%s\n' 'git diff --cached:'; \
		git diff --cached; \
	} | ollama run "$(OLLAMA_MODEL)" > "$$msg_file"; \
	printf '🦙 ollama generated' >> "$$msg_file"; \
	printf '%s\n' 'Generated commit message:'; \
	cat "$$msg_file"; \
	printf '\n'; \
	commit_msg="$$(perl -pe 's/\e\[[0-9;?]*[ -\/]*[@-~]//g' "$$msg_file")"; \
	rm -f "$$msg_file"; \
	git commit -m "$$commit_msg"

push p:
	git add .
	make commit-llm-generated
	git push
