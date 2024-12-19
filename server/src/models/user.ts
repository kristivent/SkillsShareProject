import sequelize from '../config/connection.js';
import { DataTypes, Model, Optional } from 'sequelize';
//import bcrypt from 'bcrypt';

interface UserAttributes {
  userid: number;
  username: string;
  password: string;
  email:string;
  github?:string;
  city?:string;
  skillbuddy?:boolean;
}

interface UserCreationAttributes extends Optional<UserAttributes,'userid' | 'github' | 'city' | 'skillbuddy'> {}

export default class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public userid!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public github!: string;
  public city!: string;
  public skillbuddy!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Hash the password before saving the user
  // public async setPassword(password: string) {
  //   const saltRounds = 10;
  //   this.password = await bcrypt.hash(password, saltRounds);
  // }
}

//export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      userid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    city:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    skillbuddy:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
    },
    {
      tableName: 'users',
      sequelize,
      // hooks: {
      //   beforeCreate: async (user: User) => {
      //     await user.setPassword(user.password);
      //   },
      //   beforeUpdate: async (user: User) => {
      //     await user.setPassword(user.password);
      //   },
      // }
    }
  );

//   return User;
// }

