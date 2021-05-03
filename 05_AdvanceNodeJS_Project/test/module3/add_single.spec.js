const fs = require('fs');
const expect = require('expect.js');

describe('Creating documents', () => {
    it('Create the model and schema @model-create', (done) => {
        try {
            expect(fs.readFileSync('src/models/models.js').toString())
            .to.contain("export const ProductSchema = new Schema({")
            expect(fs.readFileSync('src/models/models.js').toString())
                .to.contain("const Schema = mongoose.Schema;")
            done();      
        } catch (error) {
            done(new Error("No schema detected in your code"));
        }
    })

    it('creates controler for route @controller-create', (done) => {
        try {
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
            .to.contain("export const addnewProduct = (req, res) => {")
            expect(fs.readFileSync('src/controllers/controllers.js').toString())
                .to.contain("newProduct.save((err, Product) => {")
            done(); 
        } catch (error) {
            done(new Error("No controllers for POST endpoint detected"));
        }
    })

    it('creates a new product @route-create', (done) => {
        try {
            expect(fs.readFileSync('src/routes/routes.js').toString())
            .to.contain("app.route('/products')")
            expect(fs.readFileSync('src/routes/routes.js').toString())
                .to.contain(".post(addnewProduct);")
            done(); 
        } catch (error) {
            done(new Error("No routes for POST endpoint detected"));
        }
    });
});
