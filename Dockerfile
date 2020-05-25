FROM node:erbium-alpine3.9

WORKDIR /home/node/app
ADD package*.json ./

RUN npm i

USER node