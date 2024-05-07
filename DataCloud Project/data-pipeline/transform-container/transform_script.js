const { exec } = require('child_process');

console.log('Transform script executed.');
console.log('Current working directory:', __dirname);

const grafterizerCommand = './grafterizer -i ./data/people.csv -o ./data/output/output.csv';

exec(grafterizerCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`Grafterizer output: ${stdout}`);
});
