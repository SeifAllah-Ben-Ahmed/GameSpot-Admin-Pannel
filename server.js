require('dotenv').config({ path: './config.env' });
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');

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

// 1) MIDDLEWARES
//Body & Cookie parser, reading data from body
app.use(express.json());
app.use(cookieParser());

// 2) ROUTE HANDLERS

app.get('/', (req, res) => {
  res.status(200).end();
});
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Handle 404 not found routes
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Cant find this route ('${req.originalUrl}') on thus server!`,
      404
    )
  );
});

app.use(globalErrorHandler);
