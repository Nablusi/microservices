const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');


const Cart = sequelize.define(
    'Cart',
    {
        userId: { type: DataTypes.INTEGER, allowNull: false },
    },



);


const User = require('./user')
Cart.belongsTo(User, { foreignKey: "userId" })

module.exports = Cart