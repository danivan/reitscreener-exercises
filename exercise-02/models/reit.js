import sequelize from '../../node_modules/sequelize';

const REIT = sequelize.define('REIT', {
  name: DataTypes.STRING,
  stockCode: DataTypes.STRING,
  exchange: DataTypes.STRING,
  sector: DataTypes.STRING,
  priceCurrency: DataTypes.STRING,
  financialCurrency: DataTypes.STRING
}, {tableName: 'REIT', timestamps: false});

REIT.removeAttirbute('id');

export default REIT;