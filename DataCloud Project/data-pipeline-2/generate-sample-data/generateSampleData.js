const fs = require('fs');
const { execSync } = require('child_process');

// Load configuration from the provided JSON file
const config = require('../pipeline2.json');

// Function to run a Docker container
function runDockerCommand(image, volumePath) {
  try {
    execSync(`docker run -v "${volumePath}:/app/data" ${image}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running Docker container for image ${image}: ${error.message}`);
    process.exit(1);
  }
}

// Function to generate sample data based on the configuration
function generateSampleData() {
  // Assuming 'GenerateSampleData' step is the second element in the elements array
  const generateSampleDataStep = config.elements[1];

  if (generateSampleDataStep.parameters.stepType === 'data-source') {
    const image = generateSampleDataStep.parameters.image;
    const volumePath = process.cwd(); // Current working directory

    // Run Docker container to generate sample data
    runDockerCommand(image, volumePath);
  } else {
    console.error('Invalid step type for GenerateSampleData. Expected data-source.');
    process.exit(1);
  }
}

// Execute the pipeline step
generateSampleData();

