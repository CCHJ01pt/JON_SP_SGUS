// -- read the list of files
// -- get the file paths
// -- read file size
// -- truncate the files


const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'files');

// 'readdirSync' reads files directory to get list of files
const files = fs.readdirSync(dir);

// loop list of file names
files.forEach(file => {
   // use 'path' module to get full path
   const filePath = path.join(dir, file);
   // Async method to process multiple files
   // 'stat' to read file meta information (example: size)
   fs.stat(filePath, (err, stats) => {
   if (err) throw err;
      // 'truncate' the size of each file size
      fs.truncate(filePath, stats.size/2, (err) => {
         if (err) throw err;
      });
   });
});