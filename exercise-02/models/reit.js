import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const ReitModel = sequelize.define('Reit', {
  reitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  stockCode: DataTypes.STRING,
  exchange: DataTypes.STRING,
  sector: DataTypes.STRING,
  priceCurrency: DataTypes.STRING,
  financialCurrency: DataTypes.STRING,
}, { tableName: 'Reit', timestamps: false });

ReitModel.removeAttribute('id');

ReitModel.associate = (models) => {
  ReitModel.hasOne(models.Watchlist, { foreignKey: 'reitId' });
};

export default ReitModel;
