const express = require('express');

const authController = require('../controllers/authController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').get(categoryController.getAllCategories);
router.use(authController.protect, authController.restrictTo('admin'));

router.route('/').post(categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory)
  .patch(categoryController.updateCategory);
module.exports = router;
