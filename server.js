require('dotenv').config({ path: './config.env' });
const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');
const connectDB = require('./config/connectDB');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const port = process.env.PORT || 5000;

// DataBase Connection

connectDB();

app.listen(port, (err) => {
  if (err) return console.log(err, '💥💥');
  console.log(`App running on port ${port}... 🚀🚀`);
});
// ROUTE HANDLERS

app.get('/', (req, res) => {
  res.status(200).end();
});

// Handle 404 not found routes
app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on thus server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
