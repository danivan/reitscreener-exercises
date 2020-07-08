import {Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey} from 'sequelize-typescript';

interface Reit {
  reitId: Number,
  name: String,
  stockCode: String,
  exchange: String,
  sector: String,
  priceCurrency: String,
  financialCurrency: String,
}

@Table({
  freezeTableName: true,
  timestamps: false
})
class Reit extends Model<Reit> {

  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.INTEGER)
  reitId!: Number;

  @Column(DataType.STRING)
  name!: String;

  @Column(DataType.STRING)
  stockCode!: String;

  @Column(DataType.STRING)
  exchange!: String;

  @Column(DataType.STRING)
  sector!: String;

  @Column(DataType.STRING)
  priceCurrency!: String;

  @Column(DataType.STRING)
  financialCurrency!: String;
}

export default Reit;
