import express from 'express';
import {
  getSkillDetails
} from '../../controller/skills-map-controller.js';

const router = express.Router();

// GET /skills/:id - Get a user by id
router.get('/:skill', getSkillDetails);

export { router as skillRouter };