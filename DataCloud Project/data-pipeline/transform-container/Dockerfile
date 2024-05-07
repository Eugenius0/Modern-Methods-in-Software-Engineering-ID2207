# Dockerfile for Transform Container
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "transform_script.js"]