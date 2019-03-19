####################################################
IMAGE := alfierichou/grpc-template
VERSION := 1.0.0

build-image:
	@echo "build docker image ..."
	@docker build -t ${IMAGE} .

image-tag:
	@docker tag ${IMAGE} ${IMAGE}:${VERSION}
	