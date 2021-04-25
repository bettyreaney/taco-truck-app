// load modules require express
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;
const indexRouter = require('./routes/index'); 
const truckRouter = require('./routes/trucks'); 
const cartsRouter = require('./routes/carts');

// initilize express app
const app = express();

// connect to DB
require('./config/database');

// configure app settings
app.set('view engine', 'ejs'); 

// mount middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// mount routes app.use
app.use('/', indexRouter);
app.use('/trucks', truckRouter);
app.use('/carts', cartsRouter);

// listen on a port
app.listen(3000, function() {
    console.log('Express is listening for requests from the browser')
});
