const multer = require('multer');
const sharp = require('sharp');

const Product = require('../models/productModel');
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

exports.uploadimages = upload.fields([
  {
    name: 'imageCover',
    maxCount: 1,
  },
  {
    name: 'images',
    maxCount: 5,
  },
]);

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  // if (!req.files.imageCover || !req.files.images) return next();

  // 1) imageCover
  if (req.files && req.files.imageCover) {
    req.body.imageCover = `product-${req.body.name}-default.jpeg`;

    await sharp(req.files.imageCover[0].buffer)
      .resize(512, 512)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`client/public/images/products/${req.body.imageCover}`);
  }
  // 2) images
  if (req.files && req.files.images) {
    req.body.images = [];

    await Promise.all(
      req.files.images.map(async (file, i) => {
        const filename = `product-${req.body.name}-${i + 1}.jpeg`;

        await sharp(file.buffer)
          .resize(512, 512)
          .toFormat('jpeg')
          .jpeg({ quality: 100 })
          .toFile(`client/public/images/products/${filename}`);

        req.body.images.push(filename);
      })
    );
  }

  next();
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const product = await Product.findOne({ slug });

  if (!product) {
    return next(new AppError('Porduct not found', 404));
  }

  Object.keys(req.body).forEach((el) => {
    product[el] = req.body[el];
  });

  await product.save();

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const product = await Product.findOne({ slug });

  if (!product) {
    return next(new AppError('Product not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  await Product.findOneAndDelete({ slug });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    result: products.length,
    data: {
      products,
    },
  });
});
