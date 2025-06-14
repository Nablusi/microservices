const { body } = require('express-validator');

const orderItemValidation = [
    body('quantity')
        .notEmpty().withMessage('quantity is required'),

    body('priceAtOrderTime')
        .notEmpty().withMessage('priceAtOrderTime is required'),
];

module.exports = {
    orderItemValidation,
};
