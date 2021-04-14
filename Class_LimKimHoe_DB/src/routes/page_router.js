const express = require('express');
const router = express.Router();
const db = require('../server/config');

// -- Error Checking
//console.log(db);

// -- Navigation
const nav = [
   { link: '/', title: 'Home' },
   { link: '/link1', title: 'link1' },
   { link: '/link2', title: 'link2' }
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

// -- Link One
router.get('/link1', (req, res) => {
   // -- sql query
   const sql = `
      SELECT * FROM cls_asm WHERE id > ? AND id < ?;
   `;
   // -- [] values to replace ? in the query (if any)
   db.query(sql, [1, 8], function (err, result) {
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

module.exports = router;