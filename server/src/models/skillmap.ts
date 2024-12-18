import { DataTypes, Sequelize, Model, Optional, ForeignKey } from 'sequelize';
import { User } from './user';
import { Skill } from './skills';

interface SkillMapAttributes {
  skillnumber: number;  
  skillid: number;
  userid:number;
  skilllevel: string;
}

interface SkillMapCreationAttributes extends Optional<SkillMapAttributes,'skillnumber'> {}  

export class SkillMap extends Model<SkillMapAttributes, SkillMapCreationAttributes> implements SkillMapAttributes {
  public skillnumber!: number;
  public skillid!: ForeignKey<Skill['skillid']>;
  public userid!: ForeignKey<User['userid']>;
  public skilllevel!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function SkillMapFactory(sequelize: Sequelize): typeof SkillMap {
  SkillMap.init(
    {
      skillnumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skillid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      skilllevel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'skillmap',
    }
  );
  return SkillMap;
}