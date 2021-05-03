const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   port: '8889',
   user: 'admin',
   password: '',
   database: 'sgus_db_test',
});

connection.connect((err) => {
   if (err) throw err;
});

module.exports = connection;