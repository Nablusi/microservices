// models/RestaurantProfile.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const RestaurantProfile = sequelize.define('RestaurantProfile', {
  phone: { type: DataTypes.STRING, allowNull: false },
  restaurant_name: { type: DataTypes.STRING, allowNull: false, unique: true },
  restaurant_address: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false } 
}, {
  tableName: 'restaurant_profiles'
});

RestaurantProfile.belongsTo(require('./user'), { foreignKey: 'userId' });

module.exports = RestaurantProfile;