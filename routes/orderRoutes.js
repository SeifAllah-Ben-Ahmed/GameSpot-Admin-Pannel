const express = require('express');

const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.route('/').get(orderController.getAllOrders);
router.route('/:id').get(orderController.getOrder);

router.use(authController.protect, authController.restrictTo('admin'));

router.route('/').post(orderController.createOrder);

router
  .route('/:id')
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
