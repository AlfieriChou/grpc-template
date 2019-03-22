#######################################
CLIENT_DIR := ./client
CLIENT_DEP := ./client/node_modules

client-install:
	@echo "dependencies exists?"
	@echo "install node dependencies package ..."
	@if test -d ${CLIENT_DEP}; \
		then echo "npm package has been installed"; \
		else cd ${CLIENT_DIR} && npm install; \
		fi

client-build:
	@echo "build and prettier format"
	@cd ${CLIENT_DIR} && npm run build:format

client-start:
	@echo "run client ..."
	@cd ${CLIENT_DIR} && npm run client

client-run:
	@make client-install
	@make client-build
	@make client-start
