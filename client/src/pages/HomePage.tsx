import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGoogleBooks } from '../api/googlebook';
import { searchgitHub } from '../api/githubapi';
import { retrieveSkills } from '../api/userskills';

import '../assets/styles/search.css';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const books = await searchGoogleBooks(searchTerm);

      if (!books || books.items.length === 0) {
        setErrorMessage(`No books found for "${searchTerm}". Please try again.`);
        return;
      }

      let skills: string | any[] = [];
      try {
        skills = await retrieveSkills(searchTerm);
      } catch (skillsError) {
        console.warn('Error retrieving skills:', skillsError);
      }

      const firstSkill = skills.length > 0 ? skills[0] : null;
      let gitHubData = [];

      if (firstSkill) {
        try {
          gitHubData = await searchgitHub(firstSkill.githubusername);
        } catch (githubError) {
          console.warn(`Error retrieving GitHub data for ${firstSkill.githubusername}:`, githubError);
        }
      }

      const combinedData = {
        search: searchTerm,
        name: firstSkill?.userName || '',
        email: firstSkill?.email || '',
        expertiseLevel: firstSkill?.skillLevel || '',
        books: books.items,
        gitHubData,
      };

      navigate('/results', { state: combinedData });
    } catch (err) {
      console.error('Error during search:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSearchTerm('');
    }
  };

  return (
    <>
      <div className='search-container'>
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
      </div>
      <main>
        <p className='textme'>Discover the Skills That Ignite Your Passion Today!</p>
        <div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </main>
    </>
  );
}

export default HomePage;
