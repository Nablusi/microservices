const { body } = require('express-validator');
const cartValidation = [
    body('foodId')
        .notEmpty().withMessage('foodId name is required'),

    body('cartId')
        .notEmpty().withMessage('cartId is required'),

    body('quantity')
        .notEmpty().withMessage('quantity is required'),

    body('price')
        .notEmpty().withMessage('price is required'),

];

module.exports = {
    cartValidation,
};
