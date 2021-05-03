const fs = require('fs');
const expect = require('expect.js');

describe('Find a single product', () => {
    it('Add controler to pull a single item @controller-single', (done) => {
        try {
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("export const getProductWithID = (req, res) => {")
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("Product.findById(req.params.ProductID, (err, Product) => {")
            done();
        } catch (error) {
            done(new Error("No controllers for GET specific ID endpoint detected"));
        }
    })

    it('Add route to pull a single item @route-single', (done) => {
        try {
            expect(fs.readFileSync('src/routes/routes.js').toString())
                .to.contain("app.route('/products/:ProductID')")
            expect(fs.readFileSync('src/routes/routes.js').toString())
                .to.contain(".get(getProductWithID)")
            done();
        } catch (error) {
            done(new Error("No routes for GET endpoint detected"));
        }
    })
});
