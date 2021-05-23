// let exports = module.exports;

// exports.id = 1 // this is ok
// exports = { id : 1}; // this is not ok
// //  cannot direct replacemnt export.object

// module.exports = { id : 1 }; // this is ok
// // (module.) is required should that a need to replace export objects

// // why??
// var g = 42; // local to this file

// require = function() {
//    return {mocked: true};
// };

// const fs = require('fs');
// console.log(fs);

// const printStars = require('./printStars');
// printStars(10, 'Hi!')

require('./ascii-art')();
// console.log(require.cache);
// delete require.cache['/Users/jn/Desktop/Jon/SGUS/SGUS-Practise_Folder/AdvanceNode/08_WrappingAndCachingModules/ascii-art.js']

require('./ascii-art')();