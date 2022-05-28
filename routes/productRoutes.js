const express = require('express');

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

const brandRouter = require('./brandRoutes');
const categoryRoutes = require('./categoryRoutes');

const router = express.Router();

router.use('/brand', brandRouter);
router.use('/category', categoryRoutes);

router.route('/').get(productController.getAllProducts);
router.route('/:slug').get(productController.getProduct);

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/')
  .post(
    productController.uploadimages,
    productController.resizeProductImages,
    productController.createProduct
  );

router
  .route('/:slug')
  .patch(
    productController.uploadimages,
    productController.resizeProductImages,
    productController.updateProduct
  )
  .delete(productController.deleteProduct);

module.exports = router;
