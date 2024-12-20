import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', password: 'password' , email: 'k12@mail.com'},
    { username: 'SunnyScribe', password: 'password',email: 'k12@mail.com' },
    { username: 'RadiantComet', password: 'password',email: 'k12@mail.com'},
  ], { individualHooks: true });
};