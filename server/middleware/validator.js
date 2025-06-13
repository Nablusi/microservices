const { body } = require('express-validator');

const registerValidation = [
  body('firstName')
    .notEmpty().withMessage('First name is required')
    .isAlpha().withMessage('First name must contain only letters'),
  
  body('lastName')
    .notEmpty().withMessage('Last name is required')
    .isAlpha().withMessage('Last name must contain only letters'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 4 }).withMessage('Password must be at least 4 characters'),

  body('userType')
    .optional()
    .isIn(['restaurant_owner', 'normal']).withMessage('User type must be either restaurant_owner or normal'),
];

module.exports = {
  registerValidation,
};
