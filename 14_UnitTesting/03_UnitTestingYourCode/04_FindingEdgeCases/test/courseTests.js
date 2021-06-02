// <reference path="../typings/mocha/mocha.d.ts"/>
'use strict';

var Student = require("../Student")
, Course = require("../Course")
, chai = require("chai")
, should = chai.should()
, expect = chai.expect
;

describe("Course", function () {
   // main variables for testing
   let   courseName = "Software engineering"
   ,     courseCode = "SEW 1406"
   ,     courseDesc = "Be a Super software developer!!"
   ,     student;

   // create beforeEach
   beforeEach(() => {
      student = Student.create("jon doe", 5);
   });

   // create test
   it('verify data is saved correctly', () => {
      let course = Course.create(courseName, courseCode, courseDesc);

      // verification settings
      should.exist(course.name);
      should.exist(course.code);
      should.exist(course.description);

      should.exist(course.students);
      // should.equal compairs references
      // course.students.should.equal([]);
      // should.eql does deep comparison and compares values
      course.students.should.eql([]);

      should.exist(course.times);
      course.times.should.eql([]);
   });

   describe('register student', () => {
      // create test
      it('test: add to student array', () => {
         // specific variables for testing
         let course = Course.create(courseName, courseCode, courseDesc);

         // -- Why are we testing student variable?
         // -- use beforeEach();
         // let student = Student.create("jon doe", 5);

         // verification settings
         course.registerStudent(student);

         // verification of registration is inserted into array
         course.students.length.should.equal(1);

         // verify if id is the same
         course.students[0].id.should.equal(student.id);

      });
   });

   describe('unregister student', () => {
      it('throw: error, student is not in this class', () => {
         // specific variables for testing
         let course = Course.create(courseName, courseCode, courseDesc);

         expect(() => {
            course.unregisterStudent('blank');
         }).to.be.throw();
      });
   });

   describe('adding time', () => {
      it('addition of times/days to course', () => {
         // specific variables for testing
         let course = Course.create(courseName, courseCode, courseDesc);
         let days = ['Monday', 'Wednesday', 'Friday'];
         let times = ['10:00', '14:00'];

         // call addTimes() pass variables
         course.addTimes(days, times);

         // verify: the amount of timings
         course.times.length.should.equal(6);

         // verify: specific timings
         course.times[2].should.eql({
            // days: "Wednesday", // variables of Course.js > me.times.push()
            // times: "10:00" // -- should be day and time
            day: "Wednesday",
            time: "10:00"
         });
      });

      it('addition of non-days into array', () => {
         let course = Course.create(courseName, courseCode, courseDesc);
         let day = 'fabulousday';
         let time = '10:00';

         // expect: finds and throws error
         expect(() => {
            course.addTimes(day, time);
         }).to.throw();
      });
   });

});
