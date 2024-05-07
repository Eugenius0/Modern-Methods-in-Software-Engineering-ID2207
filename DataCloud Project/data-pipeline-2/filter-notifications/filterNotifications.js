const axios = require('axios');

// Load configuration from the provided JSON file
const config = require('../pipeline2.json');

// Assuming 'FilterNotifications' step is the fifth element in the elements array
const filterNotificationsStep = config.elements[4];

// Check if the step type is 'data-processing'
if (filterNotificationsStep.parameters.stepType === 'data-processing') {
  const filterConfig = filterNotificationsStep.parameters.environmentParameters.reduce((acc, param) => {
    acc[param.key] = param.value;
    return acc;
  }, {});

  // Create a filter payload (modify as needed)
  const filterPayload = {
    type: filterConfig.NOTIFICATION_TYPE || 'email',
    debugMode: filterConfig.DEBUG_MODE === 'true',
    // Add other filter payload properties as needed
  };

  // Make a request to the filter service
  axios.post('sample-filter-service-url', filterPayload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('Notifications filtered successfully:', response.data);
      // Process the response as needed
    })
    .catch(error => {
      console.error('Error filtering notifications:', error.message);
      process.exit(1);
    });
} else {
  console.error('Invalid step type for FilterNotifications. Expected data-processing.');
  process.exit(1);
}
