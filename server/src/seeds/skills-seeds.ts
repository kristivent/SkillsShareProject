import { Skill } from '../models/index.js';
import {SkillMap} from '../models/index.js';
import { User } from '../models/index.js';

export const seedUsers1 = async () => {
  await User.bulkCreate([
    { username: 'Ben', password: 'password' , email: 'Ben@email.com',github:'Jerciolt',city:'Hightstown',skillbuddy:true},
    { username: 'Charles', password: 'password' , email: 'Charles@email.com',github:'1761177247',city:'Monroe',skillbuddy:true},
    { username: 'George', password: 'password' , email: 'George@email.com',github:'antnavnav',city:'South brunswick',skillbuddy:true},
    { username: 'David', password: 'password' , email: 'David@email.com',github:'GeorgeFamily',city:'Cranburry',skillbuddy:true},
    { username: 'Allie', password: 'password' , email: 'Allie@email.com',github:'SR-Akash',city:'old heights',skillbuddy:true},
    { username: 'Anna', password: 'password' , email: 'Anna@email.com',github:'donlemefo',city:'Monroe',skillbuddy:true},
    { username: 'Riyan', password: 'password' , email: 'Riyan@email.com',github:'Effnote',city:'Hightstown',skillbuddy:true},
  ]);
};


export const seedskill = async () => {
  await Skill.bulkCreate([
{ skillname: 'HTML' },
{ skillname: 'CSS' },
{ skillname: 'JavaScript' },
{ skillname: 'React' },
{ skillname: 'Node.js' },
{ skillname: 'Express.js' },
{ skillname: 'PostgreSQL' },
{ skillname: 'Sequelize' },
{ skillname: 'Git' },
{ skillname: 'GitHub' },
  ]);
};

export const seedSkillMap = async () => {
  await SkillMap.bulkCreate([
    { skillnumber: 1, skillid: 1, userid:1,skilllevel: 'Expert' },
    { skillnumber: 2, skillid: 2, userid:2,skilllevel: 'Expert' },
    { skillnumber: 3, skillid: 3, userid:3,skilllevel: 'Expert' },
    { skillnumber: 4, skillid: 4, userid:4,skilllevel: 'Expert' },
    { skillnumber: 5, skillid: 5, userid:5,skilllevel: 'Expert' },
    { skillnumber: 7, skillid: 7, userid:6,skilllevel: 'Expert' },
    { skillnumber: 8, skillid: 8, userid:7,skilllevel: 'Expert' },
    { skillnumber: 9, skillid: 9, userid:7,skilllevel: 'Expert' },

  ]);
};