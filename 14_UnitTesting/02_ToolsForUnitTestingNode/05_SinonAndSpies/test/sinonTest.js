'use strict';
// jshint expr: true
let   chai = require('chai'),
      sinon = require('sinon'),
      expect =  chai.expect;

chai.should();

describe('sinon test', () => {
   let student, schedule;

   beforeEach(() => {
      // student = {
      //    dropClass: (classId, cb) => {
      //       // do something
      //       cb();
      //    }
      // };

      student = {
         dropClass: (classId, cb) => {
            if (!!cb.dropClass){
               cb.dropClass();
            } else {
               cb();
            }
         }
      };

      schedule = {
         dropClass: (classId, cb) => {
            console.log('class dropped');
         }
      };

   });

   // -- Simple Boonlean Callback
   // describe('student.dropClass', () => {
   //    it('callback calls', () => {
   //       // set a boonlean
   //       let called = false;
   //       // function to call callback, but is it called?
   //       function callback(param1, param2) { // and with param?
   //          // if callback works it should return true
   //          called = true;
   //       }
   //       student.dropClass(1, callback);
   //       // set what result to expect
   //       expect(called).to.be.true;
   //    })
   // });

   // -- Sinon Spy
   describe('student.dropClass', () => {
      it('callback calls', () => {
         // .spy() puts a watch function on each invocation
         let spy = sinon.spy()

         student.dropClass(1, spy);

         // set result of spy
         spy.called.should.be.true;
      });

      // create a test
      it('call callback and log to console', () => {
         // if true log it
         function onClassDropped() {
            console.log('onClassDropped was called');
         }
         // wrap function in sinon spy
         let spy = sinon.spy(onClassDropped);

         student.dropClass(1, spy);

         // set result of spy
         spy.called.should.be.true;
      });

      // spy wrap around method
      it('call callback of object method too', () => {
         // sinon wraps method in spy and replace method with wrapped spy
         sinon.spy(schedule, 'dropClass');
         student.dropClass(1, schedule);
         schedule.dropClass.called.should.be.true;
      });
   });
});