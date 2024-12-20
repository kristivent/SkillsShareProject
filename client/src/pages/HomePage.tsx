import { useState, ChangeEvent } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  interface SearchChangeEvent extends ChangeEvent<HTMLInputElement> {}

  const handleSearchChange = (event: SearchChangeEvent) => {
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