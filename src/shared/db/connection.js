const { Sequelize } = require('sequelize');
const logger = require('../utils/logger');

// Database Configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: (msg) => logger.debug(msg), // Pipe SQL logs to our Pino logger
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info('✅ Database connection has been established successfully.');
    
    if (process.env.NODE_ENV !== 'production') {
       // await sequelize.sync({ alter: true }); // Careful with this!
    }
  } catch (error) {
    logger.error('❌ Unable to connect to the database:', error);
    process.exit(1); // Fail fast
  }
};

module.exports = { sequelize, connectDB };