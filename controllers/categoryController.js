const Category = require('../models/categoryModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.createCategory = catchAsync(async (req, res, next) => {
  const category = await Category.create(
    req.body.parent ? { ...req.body } : { name: req.body.name }
  );

  res.status(201).json({
    status: 'success',
    category,
  });
});

exports.getAllCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find().populate('parent');

  res.status(200).json({
    status: 'success',
    categories,
  });
});

exports.getCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id).populate('parent');

  if (!category) {
    return next(new AppError('categorys not found', 404));
  }

  res.status(200).json({
    status: 'success',
    category,
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    return next(new AppError('category not found', 404));
  }

  Object.keys(req.body).forEach((el) => {
    category[el] = req.body[el];
  });

  await category.save();

  res.status(200).json({
    status: 'success',
    data: {
      category,
    },
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
