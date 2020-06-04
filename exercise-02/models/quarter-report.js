import sequelize from 'sequelize';

const QuarterReportModel = sequelize.define('QuarterReport', {
  reitId: DataTypes.INTEGER,
  period: DataTypes.STRING,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT,
  link: DataTypes.STRING
}, {tableName: 'QuarterReport', timestamps: false});

QuarterReportModel.removeAttribute('id');

export default QuarterReportModel;