FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./

RUN npm install -y

CMD [ "node", "index.js" ]