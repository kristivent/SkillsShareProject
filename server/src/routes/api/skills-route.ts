import express from 'express';
import {
 getSkillById,
  getUserById,
  getSkillLevel,
    getAllSkillsMap,
} from '../../controller/skills-map-controller.js';

const router = express.Router();

// GET /skills/:id - Get a user by id
router.get('/:id', getSkillById);

// POST /users - Create a new user
router.get('/id', getUserById);

// PUT /users/:id - Update a user by id
router.get('/:id', getSkillLevel);

// DELETE /users/:id - Delete a user by id
router.get('/:id', getAllSkillsMap);

export { router as skillRouter };