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

function add(num1, num2) {
   return num1 + num2;
}

describe('add without setup/teardown', () => {

   let num;

   // 1 param, execute callback at the start of every test
   beforeEach(() => {
      num = 5;
   });

   // 1 param, execute callback at the end of every test
   afterEach(() => {

   });

   it('should be 10 (5+5)', () => {
      num = add(num, 5);
      num.should.equal(10);
   });

   it('should be 12 (7+5)', () => {
      add(num, 7).should.equal(12);
   });
});