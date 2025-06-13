const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const NormalProfile = sequelize.define('NormalProfile', {
  phone: { type: DataTypes.STRING, allowNull: true},
  address: { type: DataTypes.STRING, allowNull: true },
  userId: { type: DataTypes.INTEGER, allowNull: true } 
}, {
  tableName: 'normal_profiles'
});

NormalProfile.belongsTo(require('./user'), { foreignKey: 'userId' });

module.exports = NormalProfile;