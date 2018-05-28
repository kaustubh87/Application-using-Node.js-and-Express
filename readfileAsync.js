var fs = require('fs');

console.log('Getting the file');
fs.readFile('readFilesync.js', function(err, file){
    console.log('Got the file');
});


console.log("App continues..");
