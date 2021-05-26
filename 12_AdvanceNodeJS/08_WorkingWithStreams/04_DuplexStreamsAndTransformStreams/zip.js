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
   // pipe to transform stream
   .pipe(zlib.createGzip())

   // encrypting
   //.pipe(crypto.createCipher('aes-192', 'a_secret'))
   .pipe(crypto.createCipheriv('aes-256-cbc', Buffer.from('1234567890abcdefghijklmnopqrstuv'), Buffer.from('1234567890abcdef')))
   //.pipe(crypto.createCipheriv('aes-256-cbc', Buffer.from(crypto.randomBytes(32)), crypto.randomBytes(16)))

   // adds progress indicator
   // .on('data', () => process.stdout.write('> '))

   // reports progress
   .pipe(progress)

   // pipe to writable stream with gz extension
   .pipe(fs.createWriteStream(file + '.zz'))

   // adds a message when finish process
   .on('finish', () => console.log(' Done!!'));
