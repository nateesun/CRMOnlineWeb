var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./config')

var app = express();

const line = require("@line/bot-sdk")
const middleware = require("@line/bot-sdk").middleware

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const lineConfig = {
  channelAccessToken: config.channelAccessToken,
  channelSecret: config.channelSecret,
}

// create LINE SDK client
const client = new line.Client(lineConfig)
const LineAPI = require('./routes/apis')(client);

app.post("/api/line/webhook", middleware(lineConfig), (req, res) => {
  // handle events separately
  Promise.all(req.body.events.map(LineAPI.handleEvent))
    .then(() => res.end())
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })

  res.status(200).send("Success")
})

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
