// load modules require express
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const indexRouter = require('./routes/index');  

// initilize express app
const app = express();

// configure app settings
app.set('view engine', 'ejs'); 

// mount middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// mount routes app.use
app.use('/', indexRouter);

// listen on a port
app.listen(3000, function() {
    console.log('Express is listening for requests from the browser')
});
