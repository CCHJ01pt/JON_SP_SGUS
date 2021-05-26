const EventEmitter = require('events');

class Server extends EventEmitter {
   constructor(client) {
      super();

      this.tasks = {}; // hold task info
      this.taskId = 1; // hold unique id for every task

      process.nextTick(() => {
         // due to execution sequence, response will not be defined
         // solution wrap in process.nextTick
         this.emit(
            'response',
            'Type a command (help to list commands)'
         );
      });

      client.on('command',(command, args) => {
         // console.log(`Command: ${command}`);
         // help, add ,ls, delete
         switch(command) {
            case 'help':
            case 'add':
            case 'ls':
            case 'delete':
               this[command](args);
               break;
               default:
               this.emit('response', 'Unknown command ...');
         }
      });
   }

   taskString() {
      return Object.keys(this.tasks).map(key => {
         return `${key}: ${this.tasks[key]}`;
      }).join('\n');
   }

   help() {
      this.emit(
      'response', `Available commands:
   add task
   ls
   delete :id
   `
      );
   }
   add(args) {
      this.tasks[this.taskId] = args.join(' ');
      this.emit('response', `Added task ${this.taskId}`);
      this.taskId++;
   }
   ls() {
      this.emit('response',`Tasks:\n${this.taskString()}`);
   }
   delete(args) {
      delete(this.tasks[args[0]]);
      this.emit('response', `Deleted task ${args[0]}`);
   }
}

module.exports = (client) => new Server(client);