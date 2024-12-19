import sequelize from '../config/connection.js';
import { DataTypes,  Model, Optional } from 'sequelize';

interface SkillAttributes {
  skillid: number;
  skillname: string;
}

interface SkillCreationAttributes extends Optional<SkillAttributes, 'skillid'> {}

export default class Skill extends Model<SkillAttributes, SkillCreationAttributes> implements SkillAttributes {
  public skillid!: number;
  public skillname!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


  Skill.init(
    {
      skillid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skillname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'skill',
    }
  );
 
