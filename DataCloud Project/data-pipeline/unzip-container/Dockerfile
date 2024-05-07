# Dockerfile for unzip-container
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "unzip_script.js"]
