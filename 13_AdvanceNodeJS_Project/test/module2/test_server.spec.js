const fs = require('fs');
const expect = require('expect.js');

describe("Server tests", function () {
  it("returns status code 200 @connection", function (done) {
    try {
      expect(fs.readFileSync('index.js').toString())
        .to.contain("res.send(`Store server running on port ${PORT}`)")
      done();
    } catch (error) {
      done(new Error("No response to GET call in your code"));
    }

  })

  it("returns Store server running message", function (done) {
    try {
      expect(fs.readFileSync('index.js').toString())
        .to.contain("console.log(`Your server is running on port ${PORT}`)")
      done();
    } catch (error) {
      done(new Error("No server logs when starting the server"));
    }
  });
});
