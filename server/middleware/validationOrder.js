const { body } = require('express-validator');

const orderValidation = [
  body('status')
    .notEmpty().withMessage('status is required'),
  
  body('totalPrice')
    .notEmpty().withMessage('totalPrice is required'),
];

module.exports = {
  orderValidation,
};
