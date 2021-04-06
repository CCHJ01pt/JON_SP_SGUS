const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const bookController = require('../controllers/bookController');
// const { render } = require('pug');
// --------- ('debug')(file:file)
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();
const bookServices = require('../services/goodreadsService');

function router(nav) {
   const { getIndex, getById, middleware } = bookController(bookServices,nav);

   bookRouter.use(middleware);

   bookRouter.route('/').get(
      // (req, res) => {
      // // --------- define URL
      // const url = 'mongodb://localhost:27017';
      // // --------- define Database
      // const dbName = 'libraryApp';
      // // use Async Function
      // (async function mongo(){
      //    let client;
      //    try {
      //       // --------- waits to connect to URL
      //       client = await MongoClient.connect(url);
      //       // --------- debug
      //       debug('Connected--------------');
      //       // --------- call Database
      //       const db = client.db(dbName);
      //       // --------- Response = the data of (books)
      //       const col = await db.collection('books');

      //       const books = await col.find().toArray();

      //       res.render(
      //          'bookListView', {
      //          nav,
      //          title: 'books',
      //          books: books
      //          }
      //       );
      //    } catch(err) {
      //       // --------- display error

      //       debug(err.stack);
      //    }
      //    client.close();
      // }());
      // }
   getIndex
   );

   bookRouter.route('/:id').get(
      // (req, res) => {
      // const { id } = req.params;
      // // --------- define URL
      // const url = 'mongodb://localhost:27017';
      // // --------- define Database
      // const dbName = 'libraryApp';
      // (async function mongo(){
      //    let client;
      //    try {
      //       // --------- waits to connect to URL
      //       client = await MongoClient.connect(url);
      //       // --------- debug
      //       debug('Connected--------------');
      //       // --------- call Database
      //       const db = client.db(dbName);
      //       // --------- Response = the data of (books)
      //       const col = await db.collection('books');

      //       const book = await col.findOne({_id: new ObjectID(id) });
      //       debug(book);

      //       res.render(
      //          'bookView',
      //          {
      //             nav,
      //             title: 'books',
      //             book
      //          }
      //       );

      //    } catch (err){
      //       debug(err.stack);
      //    }
      // }());
      // }
   getById
   );

   return bookRouter;
}
module.exports = router;

