FROM node:alpine

COPY . /app

RUN cd /app && npm install

WORKDIR /app

CMD [ "node", "index.js" ]
