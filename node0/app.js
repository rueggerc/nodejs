var fs = require('fs');

console.log("Here we go!");
var theData = fs.readFileSync('data.txt', 'utf8');
console.log(theData);


