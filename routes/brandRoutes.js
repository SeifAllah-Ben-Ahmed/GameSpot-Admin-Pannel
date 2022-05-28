const express = require('express');

const authController = require('../controllers/authController');
const brandController = require('../controllers/brandController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/')
  .post(
    brandController.uploadLogo,
    brandController.resizeLogo,
    brandController.createBrand
  )
  .get(brandController.getAllBrands);

router
  .route('/:id')
  .get(brandController.getBrand)
  .delete(brandController.deleteBrand)
  .patch(
    brandController.uploadLogo,
    brandController.resizeLogo,
    brandController.updateBrand
  );
module.exports = router;
