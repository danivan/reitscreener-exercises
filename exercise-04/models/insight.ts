import {Table, Column, Model, DataType} from 'sequelize-typescript';

interface Insight {
  reitId: Number,
  title: String,
  author: String,
  publishDate: Date,
  description: String,
  link: String,
  content: String,
  image: String,
  type: String,
}
 
@Table({
  freezeTableName: true,
  timestamps: false
})
class Insight extends Model<Insight> {

  @Column(DataType.INTEGER)
  reitId!: Number;

  @Column(DataType.STRING)
  title!: String;

  @Column(DataType.STRING)
  author!: String;

  @Column(DataType.DATE)
  publishDate!: Date;

  @Column(DataType.TEXT)
  description!: String;

  @Column(DataType.STRING)
  link!: String;

  @Column(DataType.TEXT)
  content!: String;

  @Column(DataType.STRING)
  image!: String;

  @Column(DataType.ENUM({
    values: ['news', 'blog'],
  }))
  type!: String;
}

export default Insight;
