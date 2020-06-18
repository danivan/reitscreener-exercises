import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const Watchlist = sequelize.define('Watchlist', {
  reitId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Reit',
      key: 'reitId',
    },
  },
}, { tableName: 'Watchlist', timestamps: false });

Watchlist.removeAttribute('id');

Watchlist.associate = (models) => {
  Watchlist.belongsTo(models.Reit, {
    foreignKey: 'reitId',
  });
};

export default Watchlist;
