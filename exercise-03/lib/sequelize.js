import Sequelize from 'sequelize';
import config from '../config/config.json';

export default new Sequelize(config.development.database,

  config.development.username, config.development.password, {
    dialect: config.development.dialect,
    logging: config.development.logging,
  }, {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
