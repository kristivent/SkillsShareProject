import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGoogleBooks } from '../api/googlebook';
import { searchgitHub } from '../api/githubapi';
import { retrieveSkills } from '../api/userskills';


function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
 
  const navigate = useNavigate();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try{
      const books = await searchGoogleBooks(searchTerm);
      const skills = await retrieveSkills(searchTerm);

      if (!skills || skills.length === 0) {
        console.log('No skills found');
        return;
      }

    const firstSkill = skills[0];
    console.log('First skill:', firstSkill);
    console.log('GitHub usernam0e:', firstSkill.githubusername);
    const gitHubData = await searchgitHub(firstSkill.githubusername);

    const combinedData = {
      search: searchTerm,
      name: firstSkill.userName,
      email: firstSkill.email,
      expertiseLevel: firstSkill.skillLevel,
      books: books.items,
      gitHubData,
    };
          
      navigate('/results', { state: combinedData });
    } catch (err) {
      console.error('Error during search:', err);
    }
  };

  

  return (
    <div>
      <header className="search-header">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </header>
      <main>
        <p>Search for skills, GitHub profiles, and books!</p>
      </main>
    </div>
  );
}

export default HomePage;