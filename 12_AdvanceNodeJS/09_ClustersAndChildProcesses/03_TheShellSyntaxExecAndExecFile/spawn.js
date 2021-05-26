const { spawn } = require('child_process');

// const child = spawn('find', ['.', '-type', 'f'], {
//    stdio: 'inherit'
// });

// Shell mode
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });

// Different cwd
// const child = spawn('find . -type f | wc -l', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: '/Users/jn/Downloads'
// });

// Custom env
const child = spawn('echo $ANSWER', {
   stdio: 'inherit',
   shell: true,
   env: { ANSWER: 42 },
 });
