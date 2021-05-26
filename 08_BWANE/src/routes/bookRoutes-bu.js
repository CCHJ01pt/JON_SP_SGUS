const { request } = require('express');
const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

function router(nav) {

   bookRouter.route('/').get((req, res) => {
      (async function query() {
         const request = new sql.Request();
         const {  recordset } = await request.query('select * from books');
         res.render(
            'bookListView', {
            nav,
            title: 'books',
            books: recordset
         }
         );
      }());
   });
   bookRouter.route('/:id')
   .all ((req, res, next) => {
      (async function query() {
         const { id } = req.params;
         const request = new sql.Request();
         const { recordset } =
            await request.input('id',sql.Int, id)
            .query('select * from books where id = @id');
            debug(recordset);
         [req.book] = recordset;
         next();
      }());
   })
   .get((req, res) => {
      res.render(
         'bookView',
         {
            nav,
            title: 'books',
            book: req.book
         }
      );
   })
   const books = [
      {
         title: 'Suicide Manual (Jisatsu manyaru)',
         genre: 'Horror|Mystery|Thriller',
         author: 'Tommy Bydaway',
         read: true
      },
      {
         title: 'Death Kiss, The',
         genre: 'Comedy|Mystery',
         author: 'Lani Gopsall',
         read: true
      },
      {
         title: 'From B Movie to Cult Film: Western',
         genre: 'Adventure|Documentary',
         author: 'Had Skehens',
         read: false
      },
      {
         title: 'Sexual Life of the Belgians, The (Vie sexuelle des Belges 1950-1978, La)',
         genre: 'Comedy|Romance',
         author: 'Dorena Yven',
         read: false
      },
      {
         title: 'Piggy',
         genre: 'Thriller',
         author: 'Frazer Isenor',
         read: false
      },
      {
         title: 'Four Eyed Monsters',
         genre: 'Comedy|Drama|Fantasy|Romance',
         author: 'Jackson Wallbrook',
         read: true
      },
      {
         title: 'Cheech and Chong\'s Animated Movie',
         genre: 'Animation|Comedy',
         author: 'Corene Waghorn',
         read: false
      },
      {
         title: 'Prophet, A (Un Prophète)',
         genre: 'Crime|Drama',
         author: 'Katleen Addy',
         read: false
      },
      {
         title: '5 Against the House',
         genre: 'Crime|Drama|Film-Noir',
         author: 'Renaud McGonigal',
         read: false
      },
      {
         title: 'Kummeli V',
         genre: 'Comedy',
         author: 'Bobette Brierley',
         read: true
      },
      {
         title: 'Amateur, The',
         genre: 'Crime|Thriller',
         author: 'Archy Ruppelin',
         read: true
      },
      {
         title: 'Unrest',
         genre: 'Horror|Thriller',
         author: 'Dane Sanchez',
         read: true
      },
      {
         title: 'Desperate Hours',
         genre: 'Crime|Drama|Thriller',
         author: 'Kippie Worgen',
         read: true
      },
      {
         title: 'Bianca Beauchamp: All Access',
         genre: 'Documentary',
         author: 'Mike Vasilik',
         read: true
      },
      {
         title: 'Santa\'s Slay',
         genre: 'Comedy|Fantasy|Horror',
         author: 'Maddy Sexon',
         read: true
      },
      {
         title: 'French Connection II',
         genre: 'Action|Crime|Drama|Thriller',
         author: 'Duane Churly',
         read: true
      },
      {
         title: 'Road Trip: Beer Pong',
         genre: 'Comedy',
         author: 'Melvin Bozward',
         read: true
      },
      {
         title: 'My Own Man',
         genre: '(no genres listed)',
         author: 'Adolphe Matzaitis',
         read: false
      },
      {
         title: 'Joyful Noise',
         genre: 'Comedy|Musical',
         author: 'Sharity Belleny',
         read: true
      },
      {
         title: 'For Your Consideration',
         genre: 'Comedy',
         author: 'Erhart Juleff',
         read: true
      }
   ];

   return bookRouter;
}
module.exports = router;

