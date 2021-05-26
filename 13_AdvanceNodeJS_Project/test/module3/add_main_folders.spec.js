const fs = require('fs');
const path = require('path');
const assert = require("assert");

describe('Folder structure is completed', () => {
  it('The proper files exist in their respective folders @folders', (done) => {
    try {
      assert(fs.existsSync(path.join(process.cwd(), 'src/controllers/controllers.js')), 'The controller file does not exist.');
      assert(fs.existsSync(path.join(process.cwd(), 'src/models/models.js')), 'The Model file does not exist.');
      assert(fs.existsSync(path.join(process.cwd(), 'src/routes/routes.js')), 'The Routes file does not exist.');
    } catch (error) {
      done(new Error("Can't detect the folders and files requested"));
    }
    done();
  });
});