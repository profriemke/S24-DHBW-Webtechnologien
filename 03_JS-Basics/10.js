const fs = require('fs');
const file = fs.readFileSync('10.txt', 'utf8');
console.log(file);

fs.readFile('10.txt', 'utf8', (err, data) => {
    console.log(data)
});