const Order = require('../models/orderModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getMeOrder = (req, res, next) => {
  req.user.email = req.params.email;
  next();
};

exports.getUserOrders = catchAsync(async (req, res, next) => {
  const { email } = req.user;

  const orders = await Order.find({ 'userInfo.email': email });

  res.status(200).json({
    status: 'success',
    result: orders.length,
    data: {
      orders,
    },
  });
});

exports.userOrders = catchAsync(async (req, res, next) => {
  const { email } = req.params;

  const orders = await Order.find({ 'userInfo.email': email });

  res.status(200).json({
    status: 'success',
    result: orders.length,
    data: {
      orders,
    },
  });
});

exports.getUserOrder = catchAsync(async (req, res, next) => {
  const { email } = req.user;
  const { _id } = req.params;

  const order = await Order.findOne({ _id, 'userInfo.email': email });

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.cancelUserOrder = catchAsync(async (req, res, next) => {
  const { email } = req.user;
  const { _id } = req.params;

  const order = await Order.updateOne(
    { _id, 'userInfo.email': email },
    {
      $set: { status: 'Canceled' },
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    result: orders.length,
    data: {
      orders,
    },
  });
});

exports.getOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findById(id);

  if (!order) {
    return next(new AppError('Order not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.createOrder = catchAsync(async (req, res, next) => {
  const order = await Order.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findByIdAndUpdate(
    id,
    {
      $set: { ...req.body },
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.statusStats = catchAsync(async (req, res, next) => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: '$status',
        name: { $first: '$status' },
        value: { $sum: 1 },
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      orders,
    },
  });
});

exports.getYearlyStats = catchAsync(async (req, res, next) => {
  const year = new Date(Date.now()).getFullYear();

  const orders = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$createdAt' },
        number: { $sum: 1 },
        user: { $first: '$userInfo.email' },
        total: { $sum: '$total' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },

    {
      $sort: { month: 1 },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      orders,
    },
  });
});
