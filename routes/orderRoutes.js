const express = require('express');

const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/me')
  .get(orderController.getUserOrders)
  .patch(orderController.cancelUserOrder)
  .post(orderController.createOrder);
router
  .route('/me/:id')
  .get(orderController.getUserOrder)
  .patch(orderController.cancelUserOrder);

router.use(authController.restrictTo('admin'));

router.route('/').get(orderController.getAllOrders);
router.route('/user/:email').get(orderController.userOrders);

router
  .route('/:id')
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder)
  .get(orderController.getOrder);

module.exports = router;
