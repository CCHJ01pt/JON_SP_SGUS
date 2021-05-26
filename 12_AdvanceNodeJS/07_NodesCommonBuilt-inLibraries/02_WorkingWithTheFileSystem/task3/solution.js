const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
// read current file names in the directory
const currentFiles = fs.readdirSync(dirname);

const logWithTime = (message) =>
  console.log(`${new Date().toUTCString()}: ${message}`);

// execute watch listner
fs.watch(dirname, (eventType, filename) => {
   // 'eventType === renamed' means added or deleted from directory
  if (eventType === 'rename') { // add or delete
    const index = currentFiles.indexOf(filename);
    // currentFiles array contains file = remove event
    if (index >= 0) {
       // update currentFiles array to remove file
      currentFiles.splice(index, 1);
      // output UTC timestamp message
      logWithTime(`${filename} was removed`);
      return;
    }
    // file added
    // update currentFiles array
    currentFiles.push(filename);
    // log that
    logWithTime(`${filename} was added`);
    return;
  }
  // if eventType is not renamed
  // event change listner will update file, file was changed.
  logWithTime(`${filename} was changed`);
});
