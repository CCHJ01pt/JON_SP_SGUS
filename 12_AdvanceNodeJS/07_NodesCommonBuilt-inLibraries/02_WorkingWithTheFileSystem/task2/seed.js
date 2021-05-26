// task
// -- directory of many logs - no access to directory
// -- node script to run everyday - delete files older than >7days
// -- generate test data - test cleaning script works

// To do
// -- requires : fs, path, dir, files
// -- make dir for test data
// -- loop every file in the directory
// -- run script to see if file is older than 7days

// const fs = require('fs');
// const path = require('path');
// const dirname = path.join(__dirname, 'files');

// // 'mkdirSync' make directory to work with
// fs.readdirSync(dirname);
// const ms1Day = 24*60*60*1000;

// // 'for' loop 10 times
// for (let i = 0; i < 10; i++) {
//   const filePath = path.join(dirname, `file${i}`);
//   console.log('---------------');
//   console.log(i);
//   console.log('---------------');
//   // 'writeFile' to create sample files
//   fs.writeFile(filePath, i, (err) => {
//     if (err) throw err;

//     const time = (Date.now() - i*ms1Day)/1000;
//     // each created file use 'utimes' to change the timestamp
//     // uses 2 'time' arg, access time and modified time
//     // 'time' expects Unix timestamp in seconds
//     fs.utimes(filePath, time, time, (err) => {
//       if (err) throw err;
//     });
//   });
// }


const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

fs.mkdirSync(dirname);
const ms1Day = 24*60*60*1000;

for (let i = 0; i < 10; i++) {

  const filePath = path.join(dirname, `file${i}`);

  fs.writeFile(filePath, filePath, (err) => {
    if (err) throw err;

    const time = (Date.now() - i*ms1Day)/1000;
    fs.utimes(filePath, time, time, (err) => {
      if (err) throw err;
    });
  });
};
