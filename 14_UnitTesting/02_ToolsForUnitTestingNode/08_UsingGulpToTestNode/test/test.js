'use strict';

// jshint expr: true

let chai = require('chai'),
expect =  chai.expect;

chai.should();

// Group all as one
describe('Group all test', () => {

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

   // .skip and x are both applicable to describles
   // describe.skip('add without setup/teardown 2', () => {
   xdescribe('add without setup/teardown 2', () => {

      let num;

      beforeEach(() => {
         num = 5;
      });

      afterEach(() => {
      });

      // x allows function to be skipped, similiar to .skip
      xit('should be 10 (5+5)', () => {
         num = add(num, 5);
         num.should.equal(10);
      });
      // .skip allows function to be skipped, without being deleted
      it.skip('should be 12 (7+5)', () => {
         add(num, 7).should.equal(12);
      });
   });

   // .only runs specific describe or test
   // describe.only('add without setup/teardown 3', () => {

   //    let num;

   //    beforeEach(() => {
   //       num = 5;
   //    });

   //    afterEach(() => {
   //    });
   //    // .only runs specific describe or test
   //    it.only('should be 10 (5+5)', () => {
   //       num = add(num, 5);
   //       num.should.equal(10);
   //    });

   //    it('should be 12 (7+5)', () => {
   //       add(num, 7).should.equal(12);
   //    });
   // });

});