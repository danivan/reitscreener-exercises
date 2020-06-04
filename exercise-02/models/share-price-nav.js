import sequelize from 'sequelize';

const SharePriceNAVModel = sequelize.define('SharePriceNAV', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  pricePerNAVPerUnit: DataTypes.FLOAT
}, {tableName: 'SharePriceNAV', timestamps: false});

SharePriceNAVModel.removeAttribute('id');

export default SharePriceNAVModel;