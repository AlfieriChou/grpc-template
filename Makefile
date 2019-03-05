##############################################################
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
OUT_DIR := ./src/model/
PROTO_DIR := ./src/proto

proto:
	@protoc \
		--js_out="import_style=commonjs,binary:$(OUT_DIR)" \
		--plugin="protoc-gen-ts=$(PROTOC_GEN_TS_PATH)" \
		--ts_out="service=true:$(OUT_DIR)" \
		--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto
