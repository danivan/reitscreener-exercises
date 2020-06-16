import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const ReitModel = sequelize.define('Reit', {
  reitId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  stockCode: DataTypes.STRING,
  exchange: DataTypes.STRING,
  sector: DataTypes.STRING,
  priceCurrency: DataTypes.STRING,
  financialCurrency: DataTypes.STRING,
}, { tableName: 'Reit', timestamps: false });

ReitModel.removeAttribute('id');

export default ReitModel;
