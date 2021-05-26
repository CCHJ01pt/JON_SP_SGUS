const { Readable } = require('stream');
// const inStream = new Readable();

// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);

const inStream = new Readable({
   read(size) {
      setTimeout(() => {

         if(this.currentCharCode > 90) {
            this.push(null);
            return;
         }

         // increment letter on every read
         this.push(String.fromCharCode(this.currentCharCode++));

      }, 100);
   }
});
// Start with 1 letter
inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit',() => {
   console.error(
      `\n\ncurrentCharCode is ${inStream.currentCharCode}`
   );
});
process.stdout.on('error', process.exit);