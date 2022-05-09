const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Routers
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');

//Database
const db = require('./databases/database');

var app = express();
var cors = require('cors')

app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4567/', //original url
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

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

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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