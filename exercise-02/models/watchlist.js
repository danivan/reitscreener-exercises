import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const Watchlist = sequelize.define('Watchlist', {
  reitId: DataTypes.INTEGER,
  stockCode: DataTypes.STRING,
  exchange: DataTypes.ENUM('SGX', 'HKEX'),
}, { tableName: 'Watchlist', timestamps: false });

Watchlist.removeAttribute('id');

export default Watchlist;
