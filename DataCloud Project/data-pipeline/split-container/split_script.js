const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

console.log('CSV Split script executed.');

// Input CSV file
const inputFile = './data/people.csv';

// Number of rows per output file
const rowsPerFile = 25;

// Output directory
const outputDirectory = './data/output/';

// Read the CSV file
const rows = [];
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    rows.push(row);
  })
  .on('end', () => {
    // Split the rows into chunks
    for (let i = 0; i < rows.length; i += rowsPerFile) {
      const chunk = rows.slice(i, i + rowsPerFile);
      
      // Create a new CSV file for each chunk
      const outputFile = `${outputDirectory}output_${i / rowsPerFile + 1}.csv`;
      const csvWriter = createCsvWriter({
        path: outputFile,
        header: Object.keys(rows[0]).map(column => ({ id: column, title: column })),
      });

      // Write the chunk to the CSV file
      csvWriter.writeRecords(chunk)
        .then(() => {
          console.log(`File ${outputFile} created.`);
        })
        .catch((error) => {
          console.error(`Error writing to ${outputFile}:`, error);
        });
    }
    
    console.log('CSV split completed.');
  });
