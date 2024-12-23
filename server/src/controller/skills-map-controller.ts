import { Request, Response } from 'express';
import { User } from '../models/index.js'; 
import Skill from '../models/skills.js';
import SkillMap from '../models/skillmap.js';

export const getSkillDetails = async (req: Request, res: Response) => {
  // Extract 'skill' from route parameters, and check if ti is present in the skill table,
  // if not return 404 , if present get the userid from skillmap table and get the user details from user table. 
  // flow : skill -> skillmap -> user

  const { skill } = req.params; // Extract 'skill' from route parameters

  if (!skill) {
    return res.status(400).json({ message: 'Skill name is required' });
  }

  try {
    // Step 1: Find the skill by name
    const foundSkill = await Skill.findOne({
      where: { skillname: skill },
    });

    if (!foundSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Step 2: Get all user-skills associated with the skillId
    const skillMapUser = await SkillMap.findAll({
      where: { skillid: foundSkill.skillid },
    });

    if (!skillMapUser || skillMapUser.length === 0) {
      return res.status(404).json({ message: 'Skill Map is not able to available' });
    }

    console.log(skillMapUser);

    const userIds = skillMapUser.map(skillMap => skillMap.userid);
    const userdata = await User.findAll({
       where: { userid: userIds },
    });


    // Step 3: Format the response
    const response = skillMapUser.map((skillMap) => {
      const user = userdata.find(u => u.userid === skillMap.userid);
      return {
        userName: user?.username,
        userId: skillMap.userid,
        skillLevel: skillMap.skilllevel,
        email: user?.email,
        githubusername: user?.github,
      };
    });

    return res.status(200).json(response);
  } catch (err) {
    console.error('Error fetching skill details:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};