const express = require('express');
const router = express.Router();
const db = require('../server/config');

// -- To check if db is running
//console.log(db);

// -- Navigation
const nav = [
   { link: '/', title: 'Home' },
   { link: '/link1', title: 'link1' },
   { link: '/link2', title: 'link2' },
   { link: '/link3', title: 'link3' }
];

// -- Index
router.get('/', (req, res) => {
   res.render(
      // -- Search ./src/views for ejs
      'index', {
      title: 'Home',
      nav
   }
   );
});

// -- Link Data
router.post('/linkdata', function (req, res) {
   // -- SQL query
   const sql = `
      SELECT * FROM cls_asm WHERE id > ? AND id < ?;
   `;
   // -- [] values to replace ? in the query (if any)
   db.query(sql, [1, 8], function (err, result) {
      if (err) {
         console.log(err);
         res.status(500).send({'error': 'bad'});
      } else {
         console.log(result);

         let output = {
            'secret' : 'magic...',
            'rows': []
         };
         for (var i = 0; i < result.length; i++ ) {
            output.rows.push(result[i]);
         }
         res.status(200).send(output);
      }
   });
});

// -- Search
router.post('/search', function (req, res) {
   //console.log(req.body.keyword);
   let searchTerms = req.body.keyword;

   // -- SQL query
   const sql = `
      SELECT * FROM cls_asm WHERE country = ? OR id = ? OR name = ?
   ;
   `;
   // -- [] values to replace ? in the query (if any)
   db.query(sql, [searchTerms, searchTerms, searchTerms], function (err, result) {
      if (err) {
         console.log(err);
         res.status(500).send({'error': 'bad'});
      } else {
         console.log(result);

         let output = {
            'secret' : 'magic...',
            'rows': []
         };
         for (var i = 0; i < result.length; i++ ) {
            output.rows.push(result[i]);
         }
         res.status(200).send(output);
      }
   });
});

// -- Link One
router.get('/link1', (req, res) => {
   // -- SQL query
   const sql = `
      SELECT * FROM cls_asm WHERE id > ? AND id < ?;
   `;
   // -- [] values to replace ? in the query (if any)
   db.query(sql, [0, 11], function (err, result) {
      if (err) {
         console.log(err);
      }
      else {
         // console.log("------------------------------------------");
         // console.log(result);
         res.render(
            // -- Search ./src/views for ejs
            'link1', {
            title: 'Home | Link1',
            nav,
            result
         }
         );
      }
   });
});

// -- Link Two
router.get('/link2', (req, res) => {
   res.render(
      // -- Search ./src/views for ejs
      'link2', {
      title: 'Home | Link2',
      nav
   }
   );
});

// -- Link Three

   // router.get('/link3', (req, res) => {
   //    res.render(
   //       // -- Search ./src/views for ejs
   //       'link3', {
   //       title: 'Home | Link3',
   //       nav
   //    }
   //    );
   // });

router.get('/link3', (req, res) => {
   // -- SQL query
   const sql = `
      SELECT * FROM cls_asm WHERE id > ? AND id < ?;
   `;
   // -- [] values to replace ? in the query (if any)
   db.query(sql, [0, 11], function (err, result) {
      if (err) {
         console.log(err);
      }
      else {
         // console.log("------------------------------------------");
         // console.log(result);
         res.render(
            // -- Search ./src/views for ejs
            'link3', {
            title: 'Home | Link3',
            nav,
            result
         }
         );
      }
   });
});


module.exports = router;