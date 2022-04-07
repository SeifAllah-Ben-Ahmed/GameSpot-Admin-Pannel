module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  // Operaational, trusted error : send message to client
  // Production Mode
  if (process.env.NODE_ENV === 'production') {
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
  }
  // Development Mode
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
