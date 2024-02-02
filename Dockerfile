FROM node:lts-alpine

RUN apk add --update --no-cache bash tzdata curl && \
    npm i -g pnpm && \
    mkdir -p /app 

COPY . /app
WORKDIR /app

RUN pnpm install

