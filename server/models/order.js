const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending'
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

const User = require("./user")

Order.belongsTo(User, { foreignKey: 'userId' });


module.exports = Order;
