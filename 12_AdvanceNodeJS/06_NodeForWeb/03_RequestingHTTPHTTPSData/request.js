// const http = require('http');
// const req = http.request(
//    {
//       hostname: 'www.google.com'
//       // method: 'GET or POST',
//    },
//    (res) => {
//       console.log(res.statusCode);
//       console.log(res.headers);
//       res.on('data', (data) => {
//          console.log(data.toString());
//       });
//    }
// );
// req.on('error', (e) => console.log(e));

// -- Get Method
// const http = require('http');
// const req = http.get(
//    'http://www.google.com',
//    (res) => {
//       console.log(res.statusCode);
//       console.log(res.headers);
//       res.on('data', (data) => {
//          console.log(data.toString());
//       });
//    }
// );
// req.on('error', (e) => console.log(e));
// console.log(req.agent);

// -- HTTPS
// res: http.ClientRequest
const https = require('https');
const req = https.get(
   'https://www.google.com',
   (res) => {
      // res: http.IncomingMessage
      console.log(res.statusCode);
      console.log(res.headers);
      res.on('data', (data) => {
         console.log(data.toString());
      });
   }
);
req.on('error', (e) => console.log(e));
console.log(req.agent); // http.Agent