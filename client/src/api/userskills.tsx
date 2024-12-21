import Auth from '../utils/auth';

type UserSkill = {
  userId: number;
  email: string;
  githubusername: string;
  skillLevel: string;
};

type userskills = UserSkill[]; // Array of user skills

const retrieveSkills = async (skill: string | null): Promise<userskills> => {
    try {
      console.log('skill: ', skill);
      const response = await fetch(
        `/api/skills/${skill}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.getToken()}`
          }
        }
      );
  
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('Could not invalid API response, check network tab!');
      }
      return data;
    } catch (err) {
      console.log('Error from data retrieval: ', err);
      return Promise.reject('Could not fetch singular skill');
    }
  }

    export { retrieveSkills };