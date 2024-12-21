import { Router } from 'express';

import { userRouter } from './user-routes.js';
import {searchGoogleBooksapi} from './googlebooks-api.js';
import { skillRouter } from './skills-route.js';
import { githubuserapi } from './Github.js';
const router = Router();


router.use('/users', userRouter);
router.use('/skills', skillRouter);
 router.use('/github/:username', githubuserapi);
router.get('/googlebooks', searchGoogleBooksapi);



export default router;