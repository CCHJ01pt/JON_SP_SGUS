const fs = require('fs');

// -- Asynchronous
// 'readFile' returns 'Buffer' if no encoding specified
fs.readFile(__filename, (err, data) => {
   if (err) throw err;

   // Do something with data
});

// -- Synchronous
const data = fs.readFileSync(__filename);
// Throw exceptions immediately
// Use 'try' 'catch' for errors

// Do something with data