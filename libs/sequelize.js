const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(process.env.DATABASE_URL, options);

setupModels(sequelize);

module.exports = sequelize;
