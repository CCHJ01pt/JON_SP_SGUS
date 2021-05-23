const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2]; //read filename

const { Transform } = require('stream');

const progress = new Transform({
   transform(chunk, encoding, callback) {
      process.stdout.write('- ');
      callback(null, chunk);
   }
});

// create read stream from filename
fs.createReadStream(file)
   // decrypting
   .pipe(crypto.createDecipheriv('aes-192-gcm', 'a_secret'))

   // pipe to transform stream
   .pipe(zlib.createGunzip())

   // adds progress indicator
   // .on('data', () => process.stdout.write('> '))

   // reports progress
   .pipe(progress)

   // pipe to writable stream with gz extension
   .pipe(fs.createWriteStream(file.slice(0, -3)))

   // adds a message when finish process
   .on('finish', () => console.log(' Done!!'));