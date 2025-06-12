const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const UserPreferences = sequelize.define('UserPreferences', {
  userId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  preferencesId: {  
    type: DataTypes.INTEGER, 
    allowNull: false 
  }
});

const User = require('./user');
const Preferences = require('./preferences'); 

UserPreferences.belongsTo(User, { foreignKey: 'userId' });
UserPreferences.belongsTo(Preferences, { foreignKey: 'preferencesId' });

module.exports = UserPreferences;
