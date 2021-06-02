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
         },
         addClass: (schedule) => {
            if (!schedule.classIsFull()) {
               return true;
            } else {
               return false;
            }
         }
      };

      schedule = {
         dropClass: (classId, cb) => {
            console.log('class dropped');
         },
         classIsFull: () => {
            return true;
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
   // -- Sinon Stub
   // Stubs do not call inner implementations of methods, it does not log.
   describe('student stubs', () => {
      it('call stub method', () => {
         // .stub() uses object param, runs all methods in object, replace as stub fn
         let stub = sinon.stub(schedule);
         // stub is new object in place of the schedule object
         student.dropClass(1, stub.dropClass);
         // call check
         stub.dropClass.called.should.be.true;
      });

      it('call stub method2', () => {
         // .stub() uses object param, runs all methods in object, replace as stub fn
         let stub = sinon.stub(schedule);
         // stub is new object in place of the schedule object
         student.dropClass(1, stub);
         // call check
         stub.dropClass.called.should.be.true;
      });

      it('return true if class is not full', () => {
         let stub = sinon.stub(schedule);
         stub.classIsFull.returns(false);

         let returnVal = student.addClass(stub);
         returnVal.should.be.true;
      });
   });
});