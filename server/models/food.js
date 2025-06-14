const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');


const Food = sequelize.define(
    'Food',
    {

        userId: { type: DataTypes.INTEGER, allowNull: false },
        foodName: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL,
        },
        category: {
            type: DataTypes.ENUM('fast-food', 'sea-food', 'traditional-food', 'sandwiches'),
        },
    },
);

const User = require('./user')

Food.belongsTo(User, { foreignKey: 'userId' });

module.exports = Food; 