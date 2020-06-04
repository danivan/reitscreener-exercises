import sequelize from 'sequelize';

const SharePriceModel = sequelize.define('SharePrice', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  volume: DataTypes.FLOAT,
  high: DataTypes.FLOAT,
  low: DataTypes.FLOAT,
  open: DataTypes.FLOAT,
  close: DataTypes.FLOAT
}, {tableName: 'SharePrice', timestamps: false});

SharePriceModel.removeAttribute('id');

export default SharePriceModel;
