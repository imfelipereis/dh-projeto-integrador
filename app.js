var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
const bodyParser = require("body-parser")

var productsRouter = require('./routes/products');
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var adminRouter = require('./routes/admin');
var vendasRouter = require('./routes/vendas');



const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}));


  
app.use(session({
  secret:"projetoPi",
  resave:true,
  saveUninitialized:true,
}))

app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/', usuariosRouter);
app.use('/', productsRouter);
app.use('/', adminRouter);
app.use('/', vendasRouter);

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
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
