require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync({ alter: true }); 
    console.log('All models synchronized');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

module.exports = { sequelize, connectDB };