const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

// Routers
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
const quickAddRouter = require('./routes/quickadd');
const nbateamsRouter = require('./routes/nbateams');
const statsRouter = require('./routes/stats');

// Database
mongoose.connect('mongodb+srv://nandojfg:PerfectTeam@clusterjuan.khmci.mongodb.net/PerfectTeam?retryWrites=true&w=majority');
let db = mongoose.connection;

const fs = require('fs');
const { marked } = require('marked');

var app = express();
var cors = require('cors')

app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4567/', // Original URL.
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up middleware.
app.use('/players', playerRouter);
app.use('/team', teamRouter);
app.use('/quickadd', quickAddRouter);
app.use('/nbateams', nbateamsRouter);
app.use('/stats', statsRouter);

app.use("/", function(req, res) {
  try {
    var path = __dirname + '/APIDOC.md';
    var file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
  } catch(err) {
    res.json({status: 'error', error: err.message});
  }
});

// Error handler.
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page.
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
const PORT = process.env.PORT || 4567;
app.listen(PORT);
