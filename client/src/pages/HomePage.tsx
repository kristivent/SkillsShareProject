import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGoogleBooks } from '../api/googlebook';
import { searchgitHub } from '../api/githubapi';
import { retrieveSkills } from '../api/userskills';
type UserSkill = {
  userId: number;
  email: string;
  githubusername: string;
  skillLevel: string;
};

//type userskills = UserSkill[]; // Array of user skills

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [gitusername, setgitusername] = useState('');

  interface SearchChangeEvent extends ChangeEvent<HTMLInputElement> {}

  const handleSearchChange = (event: SearchChangeEvent) => {
    setSearchTerm(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try{
      const data = await searchGoogleBooks(searchTerm);
      const skills = await retrieveSkills(searchTerm);

      if (!skills || skills.length === 0) {
        console.log('No skills found');
        return;
      }

    const firstSkill = skills[0];
    console.log('GitHub usernam0e:', firstSkill.githubusername);
    const githubapi = await searchgitHub(firstSkill.githubusername);
      //const gituser = await searchgitHub(gitusername);
      console.log(data);
      console.log(skills);
      console.log(githubapi);
      
      //setSearchTerm(data.items || []); // Assuming `data.items` contains the book results
      navigate('/results', { state: data.items });
    } catch (err) {
      console.error('Error during search:', err);
    }
  };

  

  return (
    <div>
      <h1>SkillSprout</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default HomePage;