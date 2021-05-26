//////////////////////////////////////////////////////////////////////////
// Sync Event
//////////////////////////////////////////////////////////////////////////

// const EventEmitter = require('events');

// class WithLog extends EventEmitter {
//    execute(taskFunc) {
//       console.log('Before executing');
//       this.emit('begin');
//       taskFunc(); // because of the timeout executed
//       this.emit('end');
//       console.log('After executing');
//    }
// }

// const withLog = new WithLog();

// withLog.on('begin', () => console.log('About to execute'));
// withLog.on('end', () => console.log('Done with execute'));

// withLog.execute(() => console.log('*** Executing Task ***'));

// withLog.execute(() => setTimeout(() =>
//    console.log('*** Executing Task ***'), 500)
// ); // only this is Async

// withLog.on('begin', doOneThing);
// withLog.on('begin', doAnotherThing);

//////////////////////////////////////////////////////////////////////////
// Async Event
//////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time('execute');
    this.emit('begin');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

withTime.execute(fs.readFile, __filename);