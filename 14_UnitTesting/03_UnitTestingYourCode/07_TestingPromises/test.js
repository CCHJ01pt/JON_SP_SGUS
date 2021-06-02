'use strict';

var Promise = require("bluebird")
, chai = require("chai")
, chaiAsPromised = require("chai-as-promised")
, should = chai.should()
;

chai.use(chaiAsPromised);

var student = { name: "John Doe", id: 3 }

var dataAccess = {
   getStudent: (id) => {
      if(id === 3) {
         return Promise.resolve(student);
      } else {
      return Promise.reject('Invalid Student Id')
      }
   }
};

describe("getStudent", () => {
   it('use done function', (done) => {
      dataAccess.getStudent(3).then(() => {
         student.id.should.equal(3);
         done();
      });
   });

   it('promise fulfilled', () => {
      return dataAccess.getStudent(3);
   });

   it('promise fulfilled with correct data', () => {
      return dataAccess.getStudent(3).should.eventually.equal(student);
   });

});