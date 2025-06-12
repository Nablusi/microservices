const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');
const Order = require('./order');
const Food = require('./food');

const OrderItem = sequelize.define('OrderItem', {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  priceAtOrderTime: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
OrderItem.belongsTo(Food, { foreignKey: 'foodId' });



module.exports = OrderItem;
