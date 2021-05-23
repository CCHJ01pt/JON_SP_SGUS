// process is an event emitter
process.on('exit', (code) => {
   // do final synchronous operation
   // before node process terminates
   console.log(`about to exit with code : ${code}`);
});

process.on('uncaughtException', (err) => {
   // something went unhandled
   // do any cleanup and exit anyway!
   console.error(err); // not just that

   // force exit process too
   process.exit(1);
});

// keep event loop busy
process.stdin.resume();

// trigger typeError exception
console.dog();