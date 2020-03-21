var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var session = require('express-session');
// const RedisStore = require('connect-redis')(session)
// const redisClient = require('./db/redis')
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());  // 如果是post请求  会自动以json形式加到req.body里
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// const sessionStore = new RedisStore({
//   client: redisClient
// })

app.use(session({
  secret: 'summer_ZXF#', // 类似秘钥
  cookie: {
    path: '/', //  默认也是 '/'
    httpOnly: true,  // 默认 true
    maxAge: 7 * 24 *60 *60 * 1000, // 保存七天
  },
  // store: sessionStore
}));
app.use(express.static(path.join(__dirname, 'public')));   // 如果访问public下的文件  可以将其返回

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // 只在开发环境下展示错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
