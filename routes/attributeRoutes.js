const express = require('express');
const authController = require('../controllers/authController');
const attributeController = require('../controllers/attributeController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('admin'));

router
  .route('/')
  .get(attributeController.getAllAttributes)
  .post(attributeController.createAttribute);

router
  .route('/:id')
  .get(attributeController.getAttribute)
  .patch(attributeController.updateAttribute)
  .delete(attributeController.deleteAttribute);

module.exports = router;
