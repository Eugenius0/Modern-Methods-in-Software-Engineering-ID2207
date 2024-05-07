# Dockerfile for Receive Data From MQTT container
FROM registry.cloud/tellucare-api:latest

ADD . /app

WORKDIR /app

CMD ["node", "receiveDataFromMQTT.js"]
