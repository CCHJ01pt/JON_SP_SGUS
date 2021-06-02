'use strict';

// jshint expr: true

let chai = require('chai'),
expect =  chai.expect;

chai.should();

// Simple test function
function isEven(num) {
   return num % 2 === 0;
}

// BDD Style expression test
// describe uses 1st: test description, 2nd: callback function, param
describe('isEven', () => {
   // it uses 1st: test description, 2nd: actual callback function, param
   it('should return true when number is even', () => {
      isEven(4).should.be.true;
   });

   it('should return false when number is odd', () => {
      expect(isEven(5)).to.be.false;
   });
});

