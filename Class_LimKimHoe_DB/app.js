// -- Required : Modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// -- Required : Dev Modules
const chalk = require('chalk');
const debug = require('debug')('app');

// -- App
const app = express();

// -- Setting : View Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// -- Setting : Body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// -- Dependencies : Layout
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/js')));

// -- Dependencies : Custom Layout
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/media', express.static(path.join(__dirname, '/public/media')));

// -- Required : Routes
const routes = require('./src/routes/page_router');

// -- Routes
app.use('/', routes);

// -- Setting : Port
const port = process.env.port || 4040
app.listen(port, () => {
   debug(` ${chalk.hex('#2FCDB4')('Ready')} : http://localhost:${port}/`);
});
