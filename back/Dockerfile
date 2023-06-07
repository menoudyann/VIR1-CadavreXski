# syntax=docker/dockerfile:1

FROM node:latest 

ENV NODE_ENV=dev

WORKDIR /back/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --dev

COPY . .

CMD ["node", "app.js"]