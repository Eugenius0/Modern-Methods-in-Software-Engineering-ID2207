const fs = require('fs');
const unzipper = require('unzipper');

console.log('Unzipping script executed.');

// Extract the contents of the zip file
fs.createReadStream('/app/data/text.zip')
  .pipe(unzipper.Extract({ path: '/app/data/output/' }))
  .on('close', () => {
    console.log('Unzipping completed.');
  });
