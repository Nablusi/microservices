// models/NormalProfile.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const NormalProfile = sequelize.define('NormalProfile', {
  phone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false } // Foreign key
}, {
  tableName: 'normal_profiles'
});

NormalProfile.belongsTo(require('./user'), { foreignKey: 'userId' });

module.exports = NormalProfile;