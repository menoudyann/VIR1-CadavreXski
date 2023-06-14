# syntax=docker/dockerfile:1

FROM node:18-alpine

ENV NODE_ENV=dev

WORKDIR /back

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --dev

COPY . .

CMD [ "node", "app.js"]
