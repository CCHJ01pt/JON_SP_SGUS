// -- require('something');

// -1 try 'something.js'
// -2 try 'something.json'
// -3 try 'something.node'

// const data = require('data');
// console.log(data);

// const config = require('./config.json');
// console.log(config);

const addon = require('addon');

console.log(addon.hello());