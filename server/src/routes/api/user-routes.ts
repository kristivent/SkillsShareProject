import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
} from '../../controller/user-controller.js';

const router = express.Router();

// // GET /users - Get all users
router.get('/', getAllUsers);

// // GET /users/:id - Get a user by id
router.get('/:id', getUserById);

// POST /users - Create a new user
router.post('/createUser', createUser);

// // PUT /users/:id - Update a user by id
router.put('/:id', updateUser);

export { router as userRouter };