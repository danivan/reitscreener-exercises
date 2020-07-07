import { Sequelize } from 'sequelize-typescript';
import config from '../config/config.json';
import { Dialect } from 'sequelize/types';

export default new Sequelize(config.development.database,

  config.development.username, config.development.password, {
    dialect: config.development.dialect as Dialect,
    logging: config.development.logging,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  });
