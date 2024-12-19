import { Router, Request, Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });

  if (!user) {
    return res.status(401).json({ message: 'Username is invalid' });
    
    console.log('User not found');
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Password is invalid!!' });
    console.error('Password is incorrect');
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

const router = Router();

router.post('/login', login);

export default router;