const Attribute = require('../models/attributeModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createAttribute = catchAsync(async (req, res, next) => {
  const attribute = await Attribute.create(req.body);

  res.status(201).json({
    status: 'success',
    attribute,
  });
});

exports.getAllAttributes = catchAsync(async (req, res, next) => {
  const attributes = await Attribute.find();

  res.status(201).json({
    status: 'success',
    attributes,
  });
});

exports.getAttribute = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const attribute = await Attribute.findById(id);

  if (!attribute) {
    return next(new AppError('Attribute not found', 404));
  }

  res.status(201).json({
    status: 'success',
    attribute,
  });
});

exports.deleteAttribute = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const attribute = await Attribute.findByIdAndDelete(id);

  res.status(201).json({
    status: 'success',
    attribute,
  });
});

exports.updateAttribute = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const attribute = await Attribute.findByIdAndUpdate(
    id,
    { ...req.body },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: 'success',
    attribute,
  });
});
