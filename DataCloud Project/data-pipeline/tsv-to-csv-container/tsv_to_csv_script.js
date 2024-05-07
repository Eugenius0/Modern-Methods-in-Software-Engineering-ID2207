const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

console.log('TSV to CSV script executed.');

// Read the TSV file
const tsvData = fs.readFileSync('./data/sample.tsv', 'utf-8');

// Parse TSV into an array of objects
const rows = tsvData.split('\n').map(row => row.split('\t'));

// Define the CSV header
const csvHeader = rows[0];

// Remove the header from the rows
rows.shift();

// Create a CSV writer
const csvWriter = createCsvWriter({
    path: './data/output/output.csv',
    header: csvHeader.map(column => ({ id: column, title: column })),
});

// Write the rows to the CSV file
csvWriter.writeRecords(rows).then(() => {
    console.log('TSV to CSV conversion completed.');
});
