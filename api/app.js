const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Routers
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
const quickAddRouter = require('./routes/quickadd');

//Database
const db = require('./databases/database');

const fs = require('fs');
const { marked } = require('marked');

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

app.use('/players', playerRouter);
app.use('/team', teamRouter);
app.use('/quickadd', quickAddRouter);

app.use("/", function(req, res) {
  try {
    var path = __dirname + '/APIDOC.md';
    var file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
    //res.send("API Doc: <a href=https://github.com/cfreer/PerfectTeam/blob/main/api/APIDOC.md>Documentation<a>");
  } catch(err) {
    res.json({status: 'error', error: err.message});
  }
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
const PORT = process.env.PORT || 4567;
app.listen(PORT);