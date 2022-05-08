const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Routers
const playerRouter = require('./routes/player');
//const statsRouter = require('./routes/stats');

//Database
const db = require('./databases/database');
//const { default: mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Setup middleware

// add db to request
app.use((req, res, next) => {
  req.db = db;
  next();
})

app.use('/player', playerRouter);
//app.use('/stats', statsRouter);

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

// mongoose.connect('mongodb+srv://nandojfg:PerfectTeam@clusterjuan.khmci.mongodb.net/PerfectTeam?retryWrites=true&w=majority', 
// () => console.log('conected to DB!')
// );

module.exports = app;

//app.listen(3000);