const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes
router.use(authController.protect);

// me router
router.patch('/updatePassword', authController.updatePassword);

router
  .route('/me')
  .get(userController.getMe, userController.getUser)
  .delete(userController.getMe, userController.deleteUser)
  .patch(
    userController.uploadPhoto,
    userController.resizePhoto,
    userController.updateMe
  );

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
