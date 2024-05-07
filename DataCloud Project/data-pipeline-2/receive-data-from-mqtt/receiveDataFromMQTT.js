const fs = require('fs');
const mqtt = require('mqtt');

// Load configuration from the provided JSON file
const config = require('../pipeline2.json');

// Assuming 'ReceiveDataFromMQTT' step is the third element in the elements array
const receiveDataStep = config.elements[2];

// Check if the step type is 'data-source'
if (receiveDataStep.parameters.stepType === 'data-source') {
  const mqttConfig = receiveDataStep.parameters.environmentParameters.reduce((acc, param) => {
    acc[param.key] = param.value;
    return acc;
  }, {});

  // Connect to the MQTT broker
  const client = mqtt.connect(`mqtt://${mqttConfig.RABBITMQ_HOST}`, {
    username: mqttConfig.RABBITMQ_USERNAME,
    password: mqttConfig.RABBITMQ_PASSWORD,
  });

  // Subscribe to a topic
  client.on('connect', () => {
    client.subscribe('sample-mqtt-topic', (err) => {
      if (!err) {
        console.log('Connected to MQTT broker and subscribed to the topic');
      } else {
        console.error(`Error subscribing to MQTT topic: ${err}`);
        process.exit(1);
      }
    });
  });

  // Handle incoming messages
  client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    // Process the message as needed
  });
} else {
  console.error('Invalid step type for ReceiveDataFromMQTT. Expected data-source.');
  process.exit(1);
}
