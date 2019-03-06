echo "creating certs folder ..."
sudo mkdir config/cert

echo "join certs folder ..."
sudo cd config/cert

echo "generating certs ..."

sudo openssl genrsa -passout pass:phrase -des3 -out ./config/cert/ca.key 4096

sudo openssl req -passin pass:phrase -new -x509 -days 365 -key ./config/cert/ca.key -out ./config/cert/ca.crt -subj  "/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Test/CN=ca"

sudo openssl genrsa -passout pass:phrase -des3 -out ./config/cert/server.key 4096

sudo openssl req -passin pass:phrase -new -key ./config/cert/server.key -out ./config/cert/server.csr -subj  "/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Server/CN=localhost"

sudo openssl x509 -req -passin pass:phrase -days 365 -in ./config/cert/server.csr -CA ./config/cert/ca.crt -CAkey ./config/cert/ca.key -set_serial 01 -out ./config/cert/server.crt

sudo openssl rsa -passin pass:phrase -in ./config/cert/server.key -out ./config/cert/server.key

sudo openssl genrsa -passout pass:phrase -des3 -out ./config/cert/client.key 4096

sudo openssl req -passin pass:phrase -new -key ./config/cert/client.key -out ./config/cert/client.csr -subj  "/C=CN/ST=Shanghai/L=Shanghai/O=Test/OU=Client/CN=localhost"

sudo openssl x509 -passin pass:phrase -req -days 365 -in ./config/cert/client.csr -CA ./config/cert/ca.crt -CAkey ./config/cert/ca.key -set_serial 01 -out ./config/cert/client.crt

sudo openssl rsa -passin pass:phrase -in ./config/cert/client.key -out ./config/cert/client.key