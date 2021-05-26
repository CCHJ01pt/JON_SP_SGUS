const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// -- Server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listning'));

server.on('message', (msg, rinfo) => {
   console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

// -- Client
// Every new socket is a different port

// setInterval(function () { // testing port on every connection
//    const client = dgram.createSocket('udp4');
//    client.send('Pluralsight rocks', PORT, HOST, (err) => {
//       if (err) throw err;
//       console.log('UDP Message sent');
//       client.close(); // The only packet we would like to send
//    });
// }, 1000);

// Send in parts
// const client = dgram.createSocket('udp4');
// const msg = Buffer.from('Pluralsight rocks');

// client.send(msg, 0, 11, PORT, HOST, (err) => {
//    if (err) throw err;

//    console.log('UDP Message sent');
//    client.send(msg, 11, 6, PORT, HOST, (err) => {
//       if (err) throw err;

//       console.log('UDP Message sent');
//       client.close(); // The only packet we would like to send
//    });
// });

// const client = dgram.createSocket('udp4');
// const msg = Buffer.from('Pluralsight rocks');

// client.send(msg, 0, msg.length, PORT, HOST, (err) => {
//    if (err) throw err;

//    console.log('UDP Message sent');
//    client.close(); // The only packet we would like to send
// });

// Array of things to send
const client = dgram.createSocket('udp4');
const msg = Buffer.from('Pluralsight rocks');

client.send([], PORT, HOST, (err) => {
   if (err) throw err;

   console.log('UDP Message sent');
   client.close(); // The only packet we would like to send
});
