import { Router } from 'express';

import { userRouter } from './user-routes.js';
import {searchGoogleBooks} from './googlebooks.js';
import { skillRouter } from './skills-route.js';

const router = Router();


router.use('/users', userRouter);
router.use('/skills', skillRouter);
// router.use('/github', router);
router.use('/googlebooks', searchGoogleBooks);



export default router;