# Dockerfile for Split Container
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "split_script.js"]