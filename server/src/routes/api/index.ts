import { Router } from 'express';

import { userRouter } from './user-routes.js';
import {searchGoogleBooks} from './googlebooks.js';

const router = Router();


router.use('/users', userRouter);
router.use('/skills', userRouter);
// router.use('/github', router);
router.use('/googlebooks', searchGoogleBooks);



export default router;