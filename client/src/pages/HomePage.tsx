import { useState, ChangeEvent } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchTerm(event.target.value);
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
    </div>
  );
}

export default HomePage;