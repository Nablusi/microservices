const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const RestaurantProfile = sequelize.define('RestaurantProfile', {
  phone: { type: DataTypes.STRING, allowNull: true},
  restaurant_name: { type: DataTypes.STRING, allowNull: true},
  restaurant_address: { type: DataTypes.STRING, allowNull: true},
  userId: { type: DataTypes.INTEGER  } 
}, {
  tableName: 'restaurant_profiles'
});

RestaurantProfile.belongsTo(require('./user'), { foreignKey: 'userId' });

module.exports = RestaurantProfile;