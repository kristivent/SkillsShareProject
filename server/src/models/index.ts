import dotenv from 'dotenv';
dotenv.config();

import { UserFactory } from './user.js';
import { SkillFactory } from './skills.js';
import {SkillMapFactory} from './skillmap.js';

import sequelize from '../config/connection.ts;
 
const User = UserFactory(sequelize);
const Skill = SkillFactory(sequelize);
const SkillMap = SkillMapFactory(sequelize);

User.hasMany(SkillMap, { foreignKey: 'skillid' });
SkillMap.belongsTo(User, { foreignKey: 'skillid' });

export { User, Skill, SkillMap };