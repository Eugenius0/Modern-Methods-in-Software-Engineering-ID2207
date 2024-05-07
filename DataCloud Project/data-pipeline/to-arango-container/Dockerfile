# Dockerfile for To Arango Container
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "to_arango_script.js"]