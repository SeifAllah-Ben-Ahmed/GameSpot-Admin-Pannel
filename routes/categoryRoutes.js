const express = require('express');

const authController = require('../controllers/authController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/')
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategories);

router
  .route('/:id')
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory)
  .patch(categoryController.updateCategory);
module.exports = router;
