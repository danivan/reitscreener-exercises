import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const SharePriceNAVModel = sequelize.define('SharePriceNAV', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  pricePerNAVPerUnit: DataTypes.FLOAT,
}, { tableName: 'SharePriceNAV', timestamps: false });

SharePriceNAVModel.removeAttribute('id');

export default SharePriceNAVModel;
