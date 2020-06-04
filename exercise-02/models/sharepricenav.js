import sequelize from '../../node_modules/sequelize';

const SharePriceNAV = sequelize.define('SharePriceNAV', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  pricePerNAVPerUnit: DataTypes.FLOAT
}, {tableName: 'SharePriceNAV', timestamps: false});

SharePriceNAV.removeAttribute('id');

export default SharePriceNAV;