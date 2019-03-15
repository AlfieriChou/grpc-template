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
	@mkdir config/testCerts
	@echo "cd certs folder ..."
	@cd config/testCerts
	@echo "generating certs ..."
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		./config/testCerts/ca.key 4096
	@openssl req -passin \
		pass:phrase -new -x509 \
		-days 365 -key ./config/testCerts/ca.key \
		-out ./config/testCerts/ca.crt -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Test/CN=ca"
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		./config/testCerts/server.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		./config/testCerts/server.key \
		-out ./config/testCerts/server.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Server/CN=localhost"
	@openssl x509 -req -passin \
		pass:phrase -days 365 -in \
		./config/testCerts/server.csr \
		-CA ./config/testCerts/ca.crt -CAkey \
		./config/testCerts/ca.key -set_serial 01 \
		-out ./config/testCerts/server.crt
	@openssl rsa -passin \
		pass:phrase -in ./config/testCerts/server.key \
		-out ./config/testCerts/server.key
	@openssl genrsa -passout \
		pass:phrase -des3 \
		-out ./config/testCerts/client.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		./config/testCerts/client.key \
		-out ./config/testCerts/client.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Client/CN=localhost"
	@openssl x509 -passin \
		pass:phrase -req -days 365 \
		-in ./config/testCerts/client.csr \
		-CA ./config/testCerts/ca.crt -CAkey \
		./config/testCerts/ca.key -set_serial \
		01 -out ./config/testCerts/client.crt
	@openssl rsa -passin \
		pass:phrase -in \
		./config/testCerts/client.key -out \
		./config/testCerts/client.key
