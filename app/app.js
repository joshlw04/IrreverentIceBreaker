const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const adminRouter = require('./routes/adminRouter');
const questionsRouter = require('./routes/questionsRouter');
const authRouter = require('./routes/authRouter');
const authentication = require('./middleware/authentication');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

// app.use('/api');
// app.use('/api');
app.use('/api/admins', adminRouter);
app.use('/api/questions', questionsRouter);

module.exports = app;

/*
authentication
authRouter
*/
