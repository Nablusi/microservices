const { DataTypes } = require('sequelize');
const { sequelize } = require('./database'); 

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 128] 
      }
    },
    userType: {
      type: DataTypes.ENUM('restaurant_owner', 'normal'),
      defaultValue: 'normal'
    }
  },
  {
    tableName: 'users', 
    timestamps: true, 
  }
);

module.exports = User;