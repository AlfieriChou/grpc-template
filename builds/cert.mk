##############################################################
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
OUT_DIR := ./model/
PROTO_DIR := ./proto
CERT_DIR := ./certs

protogen:
	@protoc \
		--js_out="import_style=commonjs,binary:$(OUT_DIR)" \
		--plugin="protoc-gen-ts=$(PROTOC_GEN_TS_PATH)" \
		--ts_out="service=true:$(OUT_DIR)" \
		--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto

protolint:
	@protoc \
		--lint_out=sort_imports:${PROTO_DIR} ${PROTO_DIR}/*.proto

cert:
	@echo "remove certs folder ..."
	@rm -rf ${CERT_DIR}
	@echo "creating certs folder ..."
	@mkdir ${CERT_DIR}
	@echo "cd certs folder ..."
	@cd ${CERT_DIR}
	@echo "generating certs ..."
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		${CERT_DIR}/ca.key 4096
	@openssl req -passin \
		pass:phrase -new -x509 \
		-days 365 -key ${CERT_DIR}/ca.key \
		-out ${CERT_DIR}/ca.crt -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Test/CN=ca"
	@openssl genrsa -passout \
		pass:phrase -des3 -out \
		${CERT_DIR}/server.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		${CERT_DIR}/server.key \
		-out ${CERT_DIR}/server.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Server/CN=localhost"
	@openssl x509 -req -passin \
		pass:phrase -days 365 -in \
		${CERT_DIR}/server.csr \
		-CA ${CERT_DIR}/ca.crt -CAkey \
		${CERT_DIR}/ca.key -set_serial 01 \
		-out ${CERT_DIR}/server.crt
	@openssl rsa -passin \
		pass:phrase -in ${CERT_DIR}/server.key \
		-out ${CERT_DIR}/server.key
	@openssl genrsa -passout \
		pass:phrase -des3 \
		-out ${CERT_DIR}/client.key 4096
	@openssl req -passin \
		pass:phrase -new -key \
		${CERT_DIR}/client.key \
		-out ${CERT_DIR}/client.csr -subj  \
		"/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Client/CN=localhost"
	@openssl x509 -passin \
		pass:phrase -req -days 365 \
		-in ${CERT_DIR}/client.csr \
		-CA ${CERT_DIR}/ca.crt -CAkey \
		${CERT_DIR}/ca.key -set_serial \
		01 -out ${CERT_DIR}/client.crt
	@openssl rsa -passin \
		pass:phrase -in \
		${CERT_DIR}/client.key -out \
		${CERT_DIR}/client.key
	@openssl pkcs8 -topk8 -nocrypt -in \
		${CERT_DIR}/client.key \
		-out ${CERT_DIR}/client.pem
	@openssl pkcs8 -topk8 -nocrypt -in \
		${CERT_DIR}/server.key \
		-out ${CERT_DIR}/server.pem