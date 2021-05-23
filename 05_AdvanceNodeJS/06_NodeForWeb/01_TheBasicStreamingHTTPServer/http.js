// Server Timeout Default (2 mins)
// const server = require('http').createServer();

// server.on('request', (req,res) => {
//    res.writeHead(200, {'content-type': 'text/plain'});
//    res.end('Hello World\n');
// });

// server.listen(8000);

// Set Server Timeout
const server = require('http').createServer();

server.on('request', (req,res) => {
   res.writeHead(200, {'content-type': 'text/plain'});
   res.write('Hello World\n');

   setTimeout(function () {
      res.write('Welcome to Earth\n');
   }, 200000);
});

server.timeout = 1000;
server.listen(8000);