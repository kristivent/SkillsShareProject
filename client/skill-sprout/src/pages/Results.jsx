
import React, { useEffect, useState } from 'react';
import { UserData, User } from '../interfaces/UserData';
import { GitHubProfile } from '../interfaces/GitHubProfile';
import { Book } from '../interfaces/Book'; // Ensure this path is correct

const Results = () => {
    const [user, setUser] = useState<User | null>(null);
    const [githubProfile, setGitHubProfile] = useState<GitHubProfile | null>(null);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchQuery = queryParams.get('query') || '';

    
        fetch('/api/user/1')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching user data:', error));


        fetch('https://api.github.com/users/your-github-username')
            .then((response) => response.json())
            .then((data) => setGitHubProfile(data))
            .catch((error) => console.error('Error fetching GitHub profile:', error));

        fetch('https://www.googleapis.com/books/v1/volumes?q=subject:programming')
            .then((response) => response.json())
            .then((data) => {
                const booksData = data.items.map((item) => ({
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    infoLink: item.volumeInfo.infoLink,
                }));
                setBooks(booksData);
            })
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    if (!user || !githubProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h1>Search Results</h1>
            </header>
            <section>
                <h2>Name: {user.name}</h2>
                <img src={githubProfile.avatar_url} alt="Profile" />
                <p>GitHub Username: <a href={githubProfile.html_url}>{githubProfile.login}</a></p>
                <p>GitHub Repository: {githubProfile.public_repos}</p>
                <p>Expertise Level: {user.expertiseLevel}</p>
                <h3>Reference Books:</h3>
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            <a href={book.infoLink}>{book.title}</a> by {book.authors.join(', ')}
                        </li>
                    ))}
                </ul>
                <p>Contact: {user.email}</p>
            </section>
        </div>
    );
};

export default Results;

/* Need to add some variation of this to Home.tsx to connect Google Books results:

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`/results?query=${searchQuery}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home; */

