var fs = require('fs');

console.log('Getting the file');
var file = fs.readFileSync('readFilesync.js');
console.log('Got the file');

console.log("App continues..");
