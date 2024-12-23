import React from "react";

interface HomePageProps {
  onSearch: (query: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
};

export default HomePage;
