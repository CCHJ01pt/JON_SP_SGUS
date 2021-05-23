// // server: http.Server
// const server = require('http').createServer();
// server.on('request', (req,res) => {
//    // req: http.IncomingMessage
//    // console.log(req.url);
//    switch (req.url) {
//       case '/home':
//       break;
//       case '/':
//       break;
//       default:
//    }
//    // res: http.ServerResponse
//    res.writeHead(200, {'content-type': 'text/plain'});
//    res.end('Hello World\n');
// });
// server.listen(8000);

// server: http.Server
const fs = require('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req,res) => {
   // req: http.IncomingMessage
   // console.log(req.url);
   switch (req.url) {
      // -- JSON Data
      case '/api':
         res.writeHead(200, {'content-type': 'application/json'});
         res.end(JSON.stringify(data));
      break;

      // -- HTML
      case '/home':
      case '/about':
         // res: http.ServerResponse
         res.writeHead(200, {'content-type': 'text/html'});
         res.end(fs.readFileSync(`.${req.url}.html`));
      break;
      case '/':
         res.writeHead(301, {'Location': '/home'});
         res.end();
      break;

      default:
         res.writeHead(404);
         res.end();
   }
});

server.listen(8000);

