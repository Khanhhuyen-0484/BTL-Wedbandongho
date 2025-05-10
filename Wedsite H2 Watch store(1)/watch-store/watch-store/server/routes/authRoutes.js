const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { register, login, getProfile } = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

router.post('/register',
  [body('username').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  register
);

router.post('/login', login);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;