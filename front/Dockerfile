# syntax=docker/dockerfile:1

FROM node:18-alpine 

ENV NODE_ENV=dev

WORKDIR /front/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]