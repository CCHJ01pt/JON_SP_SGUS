const { addnewProduct,
      getProducts,
      getProductWithID,
      updateProduct,
      deleteProduct
   } = require('../controllers/controllers');

   export const routes = (app) => {
   app.route('/products')
   // Get products
   .get(getProducts)
   // Post endpoint
   .post(addnewProduct);

   app.route('/products/:ProductID')
   // Get specific products
   .get(getProductWithID)
   // Put or update specific products
   .put(updateProduct)
   // Delete specific product
   .delete(deleteProduct);
}