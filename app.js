//Modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

//Router
var indexRouter = require('./routes/index');

//App
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//App settings
app.use(logger('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Directories
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));

//Routers
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(404);
  res.render('index', {
    title: '404',
    verse: 'Not Found',
    book: 'Ecclesiastes 1:14'
  });

  res.status(500);
  res.render('index', {
    title: '500',
    verse: 'Server Error',
    book: 'Philippians 4:13'
  });

  res.status(err.status);
  res.render('index', {
    title: err.status,
    verse: 'Unknown Error',
    book: 'Philippians 4:13'
  });
});

module.exports = app;