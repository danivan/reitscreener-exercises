import sequelize from 'sequelize';

const ReitModel = sequelize.define('Reit', {
  name: DataTypes.STRING,
  stockCode: DataTypes.STRING,
  exchange: DataTypes.STRING,
  sector: DataTypes.STRING,
  priceCurrency: DataTypes.STRING,
  financialCurrency: DataTypes.STRING
}, {tableName: 'Reit', timestamps: false});

ReitModel.removeAttirbute('id');

export default ReitModel;