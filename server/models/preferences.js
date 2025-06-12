const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

const Preferences = sequelize.define('Preferences', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },

});



module.exports = Preferences; 
