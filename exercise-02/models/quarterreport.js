import sequelize from '../../node_modules/sequelize';

const QuarterReport = sequelize.define('QuarterReport', {
  reitId: DataTypes.INTEGER,
  period: DataTypes.STRING,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT,
  link: DataTypes.STRING
}, {tableName: 'QuarterReport', timestamps: false});

QuarterReport.removeAttribute('id');

export default QuarterReport;