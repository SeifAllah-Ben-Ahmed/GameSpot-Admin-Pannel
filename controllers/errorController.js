const AppError = require('../utils/AppError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = Object.keys(err.keyValue);
  const message = `Please use another ${value}!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid Token. Please log in again.', 401);

const handleJWTExpiredError = () =>
  new AppError('Your Token has expired! Please log in again.', 401);

const sendErrorProd = (err, req, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // Programming or other unknown error : don't leak eroor details
  // 1) Log error
  console.error('Error', err);
  // 2) Send generic message
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong! Please try again later...',
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  let error = { ...err };
  console.log(error);
  error.message = err.message;
  if (err.name === 'CastError') error = handleCastErrorDB(error);
  if (err.code === 11000) error = handleDuplicateFieldsDB(error);
  if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
  if (err.name === 'JsonWebTokenError') error = handleJWTError();
  if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();

  sendErrorProd(error, req, res);
};
