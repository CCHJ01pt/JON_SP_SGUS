'use strict';


var Student = require("../Student")
, Course = require("../Course")
, chai = require("chai")
, should = chai.should()
, expect = chai.expect
;

// describe("Student", () => {
//    // create test
//    it('create id and save info of student', () => {
//       // test variables
//       var student = Student.create('jon Doe', 5);
//       // verify test
//       should.exist(student.name);
//    });
// });

describe("Student", () => {
   let   studentName = 'Jon Do',
         studentGrade = 5;
   // create test
   it('create id and save info of student', () => {
      // test variables
      let student = Student.create(studentName, studentGrade);

      // verify, test, class creation in Student.js > Student.create
      should.exist(student.name);
      student.name.should.equal(studentName);

      // verify, test, class creation in Student.js > Student.create
      should.exist(student.grade);
      student.grade.should.equal(studentGrade);

      // verify, test, class creation in Student.js > Student.create
      should.exist(student.id);
   });

   it('increase student grades when called',() => {
      // test variables
      let student = Student.create(studentName, studentGrade);

      // run .advanceGrade()
      student.advanceGrade();

      // verify result
      student.grade.should.equal(studentGrade+1);
   });

});
