import { Request, Response } from 'express';
import { SkillMap } from '../models/skillmap.js';

// GET skillid /skills-map
export const getSkillById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const skill = await SkillMap.findByPk(id);
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


// GET userid /skills-map
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await SkillMap.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// GET skilllevel /skills-map
export const getSkillLevel = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const skill = await SkillMap.findByPk(id);
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


// fetch all data from skillmap table
export const getAllSkillsMap = async (_req: Request, res: Response) => {
    try {
        const skills = await SkillMap.findAll();
        res.json(skills);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};