const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const ms1Day = 24*60*60*1000;

// loop on every file in directory
files.forEach(file => {
  const filePath = path.join(dirname, file);
  // read the meta data for each file
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    // when the file are modified (mtime)
    if ((Date.now() - stats.mtime.getTime() > 7*ms1Day)) {
      // 'unlink' delete file
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`deleted ${filePath}`);
      });
    }
  });
});
