###############################################
SERVER_DIR := ./server
SERVER_DEP := ./server/node_modules	

server-install:
	@echo "dependencies exists?"
	@echo "install node dependencies package ..."
	@if test -d ${SERVER_DEP}; \
		then echo "npm package has been installed"; \
		else cd ${SERVER_DIR} && npm install; \
		fi
	
server-build:
	@echo "build and prettier format"
	@cd ${SERVER_DIR} && npm run build:format

server-start:
	@echo "run server ..."
	@cd ${SERVER_DIR} && npm run server

server-run:
	@make server-install
	@make server-build
	@make server-start
