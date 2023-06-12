# syntax=docker/dockerfile:1

FROM node:latest 

ENV NODE_ENV=dev

WORKDIR /front/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]