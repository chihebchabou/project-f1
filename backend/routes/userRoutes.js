const router = require('express').Router();
const { body } = require('express-validator');

const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

router.post(
  '/',
  body('name', 'Please include your name').notEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  registerUser
);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
