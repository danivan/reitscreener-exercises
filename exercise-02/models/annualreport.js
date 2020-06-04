import sequelize from '../../node_modules/sequelize';

const AnnualReport = sequelize.define('AnnualReport', {
  reitId: DataTypes.INTEGER,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT
}, {tableName: 'AnnualReport', timestamps: false});

AnnualReport.removeAttribute('id');

export default AnnualReport;
