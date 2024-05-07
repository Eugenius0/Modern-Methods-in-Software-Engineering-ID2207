# Dockerfile for TSV to CSV Container
FROM node:14

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["node", "tsv_to_csv_script.js"]