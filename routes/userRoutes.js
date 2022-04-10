const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);

router.get('/isprotected', authController.protect, async (req, res) => {
  res.status(200).send('you are logged in');
});
router.get(
  '/isadmin',
  authController.protect,
  authController.restrictTo('admin'),
  async (req, res) => {
    res.status(200).send('you are logged in admin');
  }
);

module.exports = router;
