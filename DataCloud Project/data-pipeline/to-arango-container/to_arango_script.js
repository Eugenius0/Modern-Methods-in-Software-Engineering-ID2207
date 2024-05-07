const fs = require('fs');
const arangojs = require('arangojs');

console.log('Data loading to ArangoDB script executed.');

// Initialize ArangoDB client
const db = new arangojs.Database();

// Load data into ArangoDB with external transformation
const transformationJSON = fs.readFileSync('./data/transformation.json', 'utf-8');
const transformation = JSON.parse(transformationJSON);

// Idea is to use the Grafterizer GUI and its tools for this step. 
const applyTransformation = (data) => {
  return transformedData;
};

// Read and transform data
const rawData = fs.readFileSync('./data/output/transformed.csv', 'utf-8');
const transformedData = applyTransformation(rawData);

// Load transformed data into ArangoDB
db.collection('myCollection').import(transformedData)
  .then(() => {
    console.log('Data loading to ArangoDB completed.');
  })
  .catch((err) => {
    console.error('Error in data loading to ArangoDB:', err);
  });
