FROM node:10.15-alpine

WORKDIR /root/client

COPY . /root/client

RUN npm i && npm i yarn -g

RUN npm run build:format

CMD npm run client