// const { Socket } = require('node:dgram');
// process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

// look into timestamp lib 'moment'
function timestamp() {
   const now = new Date();
   return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {

   socket.id = counter++;
   // sockets[socket.id] = socket;

   console.log('Client connected');
   socket.write('Please enter your name: ');

   socket.on('data', data => { // buffered data

      // console.log('data is: ', data);
      // socket.write('data is: ');
      // socket.write(data); //default is utf-8

      // socket.write(`${socket.id}: `);
      // socket.write(data); //default is utf-8

      if (!sockets[socket.id]){
         socket.name = data.toString().trim();
         socket.write(`Welcome ${socket.name}!\n`);
         sockets[socket.id] = socket;
         return;
      }

      // Object.entries provides keys and value
      Object.entries(sockets).forEach(([key, clientSocket]) => {
         if (socket.id == key) return;
         clientSocket.write(`${socket.name} ${timestamp()}: `);
         clientSocket.write(data); //default is utf-8
      });
   });

   // encoding decodes buffered data to set encoding
   // socket.setEncoding('utf-8');

   socket.on('end', () => {
      delete sockets[socket.id];
      console.log('Client disconnected');
   });
});

server.listen(8000, () => console.log('Server Bound'));