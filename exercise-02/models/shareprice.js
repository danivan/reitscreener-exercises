import sequelize from '../../node_modules/sequelize';

const SharePrice = sequelize.define('SharePrice', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  volume: DataTypes.FLOAT,
  high: DataTypes.FLOAT,
  low: DataTypes.FLOAT,
  open: DataTypes.FLOAT,
  close: DataTypes.FLOAT
}, {tableName: 'SharePrice', timestamps: false});

SharePrice.removeAttribute('id');

export default SharePrice;
