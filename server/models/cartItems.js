const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');


const CartItems = sequelize.define(
    'CartItems',
    {
        cartId: { type: DataTypes.INTEGER, allowNull: false },
        foodId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.DECIMAL, allowNull: false }
    },
);


const Cart = require('./cart')
const Food = require('./food');

CartItems.belongsTo(Cart, { foreignKey: "cartId" })
CartItems.belongsTo(Food, { foreignKey: "foodId" })

module.exports = CartItems