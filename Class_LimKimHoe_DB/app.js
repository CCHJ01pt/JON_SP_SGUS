// -- Required Modules
const path = require('path');
const express = require('express');

// -- Development Required Modules
const chalk = require('chalk');
const debug = require('debug')('app');

// -- Declaring app
const app = express();

// -- Setting View Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// -- Setting port
const port = process.env.port || 4040
app.listen(port,() => {
   debug(` ${chalk.hex('#2FCDB4')('Ready')} : http://localhost:${port}/`);
});

// -- Layout Dependencies
app.use(express.static(path.join(__dirname,'/public')));
app.use('/css',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/jquery/dist')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/@fortawesome/fontawesome-free/js')));

// -- Custom Layout Dependencies
app.use('/js',express.static(path.join(__dirname,'/public/js')));
app.use('/css',express.static(path.join(__dirname,'/public/css')));
app.use('/media',express.static(path.join(__dirname,'/public/media')));

// -- Navigation
const nav =[
   { link: '/', title: 'Home'},
   { link: '/link1', title: 'link1'},
   { link: '/link2', title: 'link2'}
];

// -- Homepage
app.get('/', (req,res) => {
   res.render(
      'index', {
         title: 'Home',
         nav: [
            { link: '/link1', title: 'link1'},
            { link: '/link2', title: 'link2'}
         ]
      }
   );
});
