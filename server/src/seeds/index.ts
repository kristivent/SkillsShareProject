//import { seedUsers } from './users-seeds.js';
import sequelize from '../config/connection.js'
import { seedUsers1 } from './skills-seeds.js'
import {seedskill } from './skills-seeds.js'
import {seedSkillMap } from './skills-seeds.js'

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers1();
    console.log('\n----- USERS SEEDED -----\n');

    await seedskill();
    console.log('\n----- Skill SEEDED -----\n');

    await seedSkillMap();
    console.log('\n----- SkillMAp SEEDED -----\n');
   
       
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
