const express = require('express');

const productContoller = require('../controllers/productController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(productContoller.getAllProducts);
router.route('/:slug').get(productContoller.getProduct);

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/')
  .post(
    productContoller.uploadimages,
    productContoller.resizeProductImages,
    productContoller.createProduct
  );

router
  .route('/:slug')
  .patch(
    productContoller.uploadimages,
    productContoller.resizeProductImages,
    productContoller.updateProduct
  )
  .delete(productContoller.deleteProduct);

module.exports = router;
