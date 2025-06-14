const { body } = require('express-validator');

const foodValidation = [
  body('foodName')
    .notEmpty().withMessage('Food name is required'),
  
  body('description')
    .notEmpty().withMessage('description is required'),

  body('price')
    .notEmpty().withMessage('price is required'),

  body('category')
    .notEmpty().withMessage('category is required'),

];

module.exports = {
  foodValidation,
};
