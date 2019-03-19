####################################################
IMAGE := alfierichou/grpc-server-template
VERSION := 1.0.0
SERVER_DIR := ./server

build-server-image:
	@echo "build docker image ..."
	@docker build -t ${IMAGE} ${SERVER_DIR}

image-tag:
	@docker tag ${IMAGE} ${IMAGE}:${VERSION}
	