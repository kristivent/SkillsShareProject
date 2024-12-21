import { Request, Response } from 'express';
import { User } from '../models/index.js'; 
import Skill from '../models/skills.js';
import SkillMap from '../models/skillmap.js';

export const getSkillDetails = async (req: Request, res: Response) => {
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
    //  include: [{ model: User, as: 'user' }], // Ensure proper association in models
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


// export const getSkillDetails = async (req: Request, res: Response) => {
//   const { skill } = req.params;

//   // Ensure `queryskill` is a string
//   if (typeof skill !== 'string') {
//     console.log(`"queryskill" ${skill}`)
//     return res.status(400).json({ message: 'Invalid skill name format' });
//   }

//   if (!skill) {
//     return res.status(400).json({ message: 'Skill name is required' });
//   }

//   try {
//     // Step 1: Find the skill by name
//     const skillId = await Skill.findOne({
//       where: { skillname: skill },
//     });

//     if (!skillId) {
//       return res.status(404).json({ message: 'Skillid not found' });
//     }

//     // Step 2: Get all user-skills associated with the skillId
//     const userSkills = await SkillMap.findAll({
//       where: { skillid: skill.skillId },
//       include: [{ model: User, as: 'user' }], // Ensure proper association in models
//     });

//     if (!userSkills || userSkills.length === 0) {
//       return res.status(404).json({ message: 'No users found with this skill' });
//     }
//     console.log(userSkills);
//     // Step 3: Format the response
//     const response = userSkills.map((SkillMap) => ({
//     //   userId: userSkills.userid,
//     //   userName: User.username,
//       skillLevel: SkillMap.skilllevel,
//     //   email: User.email, // Include additional fields if necessary
//     }));

//     return res.status(200).json(response);
//   } catch (err) {
//     console.error('Error fetching skill details:', err);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };
