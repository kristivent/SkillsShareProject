import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
//import userroutes from '../routes/api/user-routes.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
//router.use('/users',userroutes);
//need to adde the authenticateToken middleware to the routes that need to be protected
 router.use('/api',authenticateToken, apiRoutes);
//router.use('/api', apiRoutes);

export default router;
