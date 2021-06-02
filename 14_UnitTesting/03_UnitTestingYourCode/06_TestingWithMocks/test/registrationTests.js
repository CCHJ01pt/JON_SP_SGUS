'use strict';

//jshint expr: true

var Course = require("../Course")
  , Student = require("../Student")
  , Registration = require("../Registration")
  , DataLoader = require("../DataLoader")
  , chai = require("chai")
  , sinon = require("sinon")
  ;

chai.should();

describe("tests for adding a student to a course", () => {
   let dataLoader
      , student
      , course
      , registration
      ;

      beforeEach(() => {
         dataLoader = sinon.stub(new DataLoader ()); // mocking
         course = Course.create(dataLoader);
         student = Student.create(dataLoader);

         dataLoader.saveCourseSync.returns(true);

         dataLoader.getStudentSync.returns({
            name: "susan",
            id: 1
         });
       });

      it("test: doesn't call save when full", () => {
         let registration = Registration.create(course, student);

         // use stub to return Course.js > getCourseSync() is called
         dataLoader.getCourseSync.returns({
            maxSize: 2,
            students: [{id:2}, {id:3}],
            id: 1
         });

         registration.registerStudentForCourse(1, 1);

         sinon.assert.notCalled(dataLoader.saveCourseSync);
      });

      it("test: does calls save when full", () => {
         let registration = Registration.create(course, student);

         // use stub to return Course.js > getCourseSync() is called
         dataLoader.getCourseSync.returns({
            maxSize: 3,
            students: [{id:2}, {id:3}],
            id: 1
         });

         registration.registerStudentForCourse(1, 1);

         sinon.assert.called(dataLoader.saveCourseSync);
      });

});