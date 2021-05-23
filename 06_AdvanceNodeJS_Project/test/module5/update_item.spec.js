const fs = require('fs');
const expect = require('expect.js');

describe('Updating a product', () => {
    it('Add a controler to update a product @controller-update', (done) => {
        try {
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product)")
            done(); 
        } catch (error) {
            done(new Error("No controllers for PUT endpoint detected"));
        }

    })

    it('Add a controler to update a product @route-update', (done) => {
        try {
            expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain(".put(updateProduct)")
             done();
        } catch (error) {
            done(new Error("No routes for PUT endpoint detected"));
        }
    })
});
