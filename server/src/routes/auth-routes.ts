import { Router, Request, Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log('Username', username);
  const user = await User.findOne({
    where: { username },
  });

  if (!user) {
    console.log('User not found');
    return res.status(401).json({ message: 'Username is invalid' });
       
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    console.error('Password is incorrect');
    return res.status(401).json({ message: 'Password is invalid!!' });
    
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  console.log('Token', token);
  return res.json({ token });
};
console.log('User in auth file:', User);
const router = Router();

router.post('/login', login);

export default router;