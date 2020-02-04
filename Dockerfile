FROM node:alpine
COPY . /app
RUN cd /app && npm install
WORKDIR /app
EXPOSE 3000
CMD [ "node", "index.js" ]