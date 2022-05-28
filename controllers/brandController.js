const multer = require('multer');
const sharp = require('sharp');
const Brand = require('../models/brandModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an Image! Please upload only images', 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadLogo = upload.single('logo');

exports.resizeLogo = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.logo = `logo-${req.body.brand}.jpeg`;

    await sharp(req.file.buffer)
      .resize(100, 100)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`images/products/logo/${req.body.logo}`);
  }

  next();
});

exports.createBrand = catchAsync(async (req, res, next) => {
  const brand = await Brand.create(req.body);

  res.status(201).json({
    status: 'success',
    brand,
  });
});

exports.getAllBrands = catchAsync(async (req, res, next) => {
  const brands = await Brand.find();

  res.status(201).json({
    status: 'success',
    brands,
  });
});

exports.getBrand = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const brand = await Brand.findById(id);

  if (!brand) {
    return next(new AppError('Brands not found', 404));
  }

  res.status(201).json({
    status: 'success',
    brand,
  });
});

exports.deleteBrand = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await Brand.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateBrand = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const brand = await Brand.findById(id);

  if (!brand) {
    return next(new AppError('Brand not found', 404));
  }

  Object.keys(req.body).forEach((el) => {
    brand[el] = req.body[el];
  });

  await brand.save();

  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});
