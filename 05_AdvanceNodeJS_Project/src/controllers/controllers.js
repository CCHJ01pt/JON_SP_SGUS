const mongoose = require('mongoose');
const ProductSchema = require('../models/models');

const Product = mongoose.model('Product', ProductSchema);

const controller = {
   'addnewProduct': (req, res) => {
      let newProduct = new Product(req.body);

      newProduct.save((err, Product) => {
         if (err) {
            res.send(err);
         }
         res.json(Product);
      });
   },
   'getProducts': (req, res) => {
      Product.find({}, (err, Product) => {
         if (err) {
            res.send(err);
         }
         res.json(Product);
      })
   },
   'getProductWithID': (req, res) => {
      Product.findById(req.params.ProductID, (err, Product) => {
         if (err) {
            res.send(err);
         }
         res.json(Product);
      })
   },
   'updateProduct': (req, res) => {
      Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
         if (err) {
            res.send(err);
         }
         res.json(Product);
      })
   },
   'deleteProduct': (req, res) => {
      Product.deleteOne({ _id: req.params.ProductID }, (err, Product) => {
         if (err) {
            res.send(err);
         }
         res.json({ message: 'successfully deleted product' });
      })
   }
};

module.exports = controller;