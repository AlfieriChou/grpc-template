##############################################################
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
OUT_DIR := ./model/
PROTO_DIR := ./proto

protogen:
	@protoc \
		--js_out="import_style=commonjs,binary:$(OUT_DIR)" \
		--plugin="protoc-gen-ts=$(PROTOC_GEN_TS_PATH)" \
		--ts_out="service=true:$(OUT_DIR)" \
		--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto

cert:
	@echo "creating certs folder ..."
	@mkdir config/certs
	@echo "cd certs folder ..."
	@cd config/certs
	@echo "generating certs ..."
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		./config/certs/ca.key 4096
	@openssl req -passin \
		pass:phrase -new -x509 \
		-days 365 -key ./config/certs/ca.key \
		-out ./config/certs/ca.crt -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Test/CN=ca"
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		./config/certs/server.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		./config/certs/server.key \
		-out ./config/certs/server.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Server/CN=localhost"
	@openssl x509 -req -passin \
		pass:phrase -days 365 -in \
		./config/certs/server.csr \
		-CA ./config/certs/ca.crt -CAkey \
		./config/certs/ca.key -set_serial 01 \
		-out ./config/certs/server.crt
	@openssl rsa -passin \
		pass:phrase -in ./config/certs/server.key \
		-out ./config/certs/server.key
	@openssl genrsa -passout \
		pass:phrase -des3 \
		-out ./config/certs/client.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		./config/certs/client.key \
		-out ./config/certs/client.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Client/CN=localhost"
	@openssl x509 -passin \
		pass:phrase -req -days 365 \
		-in ./config/certs/client.csr \
		-CA ./config/certs/ca.crt -CAkey \
		./config/certs/ca.key -set_serial \
		01 -out ./config/certs/client.crt
	@openssl rsa -passin \
		pass:phrase -in \
		./config/certs/client.key -out \
		./config/certs/client.key
