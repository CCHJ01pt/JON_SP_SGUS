const fs = require('fs');
const expect = require('expect.js');

describe('Pulling products', () => {
    it('Add controler to pull a list of items @controller-lists', (done) => {
        try {
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("export const getProducts = (req, res) => {")
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("Product.find({}, (err, Product) => {")
            done();   
        } catch (error) {
            done(new Error("No controllers for GET endpoint detected"));
        }

    })

    it('Add route to pull a list of items @route-lists', (done) => {
        try {
            expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain(".get(getProducts)")
            done();
        } catch (error) {
            done(new Error("No routes for GET endpoint detected"));
        }

    })
});
