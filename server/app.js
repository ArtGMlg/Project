var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var tasksRouter = require('./routes/tasks');
var compliteRouter = require('./routes/tasks');
var regAdminRouter = require('./routes/users');
var adminLoginRouter = require('./routes/login');
var groupsRouter = require('./routes/groups');
var constellationsRouter = require('./routes/constellations')
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/tasks', tasksRouter);
app.use('/complite', compliteRouter);
app.use('/regAdmin', regAdminRouter);
app.use('/adminLogin', adminLoginRouter);
app.use('/groups', groupsRouter);
app.use('/constellations', constellationsRouter);

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
