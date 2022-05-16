require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitier = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const attributeRoutes = require('./routes/attributeRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');

const app = express();
app.enable('trust proxy');

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
app.use(express.static('images'));
app.use(cookieParser());

// Security
//Cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
// Data sanitization against NoSQL query  injection
app.use(mongoSanitier());

// Set security HTTP headers
app.use(helmet());

// Limite request
app.use(
  '/api',
  rateLimit({
    max: 60,
    windowMs: 15 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in 15 minutes!',
  })
);

// Data sanitization against XXS
app.use(xss());

app.use(compression());

// 2) ROUTE HANDLERS

app.get('/', (req, res) => {
  res.status(200).end();
});
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/attributes', attributeRoutes);

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
