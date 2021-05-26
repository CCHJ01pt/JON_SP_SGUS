const express = require('express');
const { MongoClient } = require('mongodb');
// --------- ('debug')(file:file)
const debug = require('debug')('app:adminRoutes');
const adminRouter = express.Router();

// --------- Data

const books = [
   {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      bookId: 656,
      read: false
    },
    {
      title: 'Les Misérables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      bookId: 24280,
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
    },
    {
      title: 'The Dark World',
      genre: 'Fantasy',
      author: 'Henry Kuttner',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];

// --------- Export Router Function
module.exports = function router(nav){
   adminRouter.route('/').get((req, res) => {
      // --------- define URL
      const url = 'mongodb://localhost:27017';
      // --------- define Database
      const dbName = 'libraryApp';
      // use Async Function
      (async function mongo(){
         let client;
         try {
            // --------- waits to connect to URL
            client = await MongoClient.connect(url);
            // --------- debug
            debug('Connected--------------');
            // --------- call Database
            const db = client.db(dbName);
            // --------- Response = the data of (books)
            const response = await db.collection('books').insertMany(books);
            // --------- Create Response
            res.json(response);
         } catch(err) {
            // --------- display error

            debug(err.stack);
         }
         // --------- Close the function
         client.close();
      }());
   });
   // --------- Return to express.router
   return adminRouter;
}
