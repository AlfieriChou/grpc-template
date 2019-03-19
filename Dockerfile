FROM node:10.15-alpine

WORKDIR /root

ENV YARN_VERSION 1.15.2

RUN apk add --no-cache --virtual .build-deps-yarn curl \
  && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
  && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
  && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
  && rm yarn-v$YARN_VERSION.tar.gz \
  && apk del .build-deps-yarn

COPY . /root

RUN yarn && yarn run build

EXPOSE 7000

CMD yarn run server
