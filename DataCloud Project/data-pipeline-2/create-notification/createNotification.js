const axios = require('axios');

// Load configuration from the provided JSON file
const config = require('../pipeline2.json');

// Assuming 'CreateNotification' step is the fourth element in the elements array
const createNotificationStep = config.elements[3];

// Check if the step type is 'data-source'
if (createNotificationStep.parameters.stepType === 'data-source') {
  const notificationConfig = createNotificationStep.parameters.environmentParameters.reduce((acc, param) => {
    acc[param.key] = param.value;
    return acc;
  }, {});

  // Create a notification payload (modify as needed)
  const notificationPayload = {
    type: notificationConfig.NOTIFICATION_TYPE || 'email',
    content: 'Notification content', // Modify as needed
    // Add other notification payload properties as needed
  };

  // Make a request to the notification service
  axios.post('sample-notification-service-url', notificationPayload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('Notification created successfully:', response.data);
      // Process the response as needed
    })
    .catch(error => {
      console.error('Error creating notification:', error.message);
      process.exit(1);
    });
} else {
  console.error('Invalid step type for CreateNotification. Expected data-source.');
  process.exit(1);
}
