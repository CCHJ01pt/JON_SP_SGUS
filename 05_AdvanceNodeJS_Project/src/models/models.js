const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   name:{
      type: String,
      required: 'Product name'
   },
   description:{
      type: String,
      required: 'Product description'
   },
   category:{
      type: String
   },
   price:{
      type: Number
   },
   created_date:{
      type: Date,
      default: Date.now
   },
});
// Exports variable
module.exports = ProductSchema;