FROM node:10.15-alpine

WORKDIR /root/server

COPY . /root/server

RUN npm i && npm i yarn -g

RUN npm run build:format

EXPOSE 7000

CMD npm run server
