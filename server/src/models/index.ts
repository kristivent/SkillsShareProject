import dotenv from 'dotenv';
dotenv.config();

import { UserFactory } from './user.js';
import { SkillFactory } from './skills.js';
import {SkillMapFactory} from './skillmap.js';

import sequelize from '../config/connection.js';
 
const User = UserFactory(sequelize);
const Skill = SkillFactory(sequelize);
const SkillMap = SkillMapFactory(sequelize);

User.belongsToMany(Skill, { foreignKey: 'userid' ,through: SkillMap});
Skill.belongsToMany(User, { foreignKey: 'skillid', through: SkillMap});

export { User, Skill, SkillMap };