// ------------- Modules Requires

const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


// ------------- Use Directory

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(session({secret: 'library'}));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/media', express.static(path.join(__dirname, 'public/media')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');


// ------------- Files Requires

require('./src/config/passport.js')(app);

// ------------- Localhost Port Setting

const port = process.env.PORT || 3030;

app.listen(port, () => {
   debug(` ${chalk.hex('#4ce8cc')('Ready')} : Localhost Port ${port}`);
});

// ------------- SQL

const config = {
   user: 'sgusAdmin',
   password: '15t08X19YT87',
   server: 'sguslib.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
   database: 'SGUSLib',

   options: {
      encrypt: true
   }
};

// ------------- Debugger/Identifier

sql.connect(config).catch( function (err) {
   debug(err),
   console.log('------------------>'),
   console.log(err)
});

const nav = [
   { link: '/', title: 'Home' },
   { link: '/books', title: 'Book' },
   { link: '/authors', title: 'Author' }
];


app.use((req, res, next) => {
   debug('middle ware ------------------');
   next();
});


// ------------- Book Routes

const bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books', bookRouter);


// ------------- Admin Routes

const adminRouter = require('./src/routes/adminRoutes')(nav);
app.use('/admin', adminRouter);

// ------------- Admin Routes

const authRouter = require('./src/routes/authRoutes')(nav);
app.use('/auth', authRouter);



// ------------- Home page

app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname, 'views', 'index.html'));
   res.render(
      'index', {
      nav: [
         { link: '/books', title: 'Books' },
         { link: '/authors', title: 'Authors' }
      ],
      title: 'Home'
   }
   );
});