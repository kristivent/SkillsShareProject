//import React from 'react';
import { useLocation } from 'react-router-dom';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

interface githubProfile {
    gitHubUsername: string;
    gitHubRepository: number;
    gitHubProfile: string;
}

function ResultsPage() {
  const location = useLocation();
  const books = location.state as Book[]; // Extract the books passed via navigation GIT_HUB_API_KEY
  const gitHubdata = location.state as githubProfile[];

  return (
    <>
    <div className='gitHubProfile'>
        <h1>GitHub Profile</h1>
        {gitHubdata && gitHubdata.length > 0 ? (
            <ul>
            {gitHubdata.map((gitHubdata) => (
                <li key={gitHubdata.gitHubUsername} style={{ marginBottom: '20px' }}>
                <h2>{gitHubdata.gitHubUsername}</h2>
                <p>GitHub Username: <a href={gitHubdata.gitHubProfile}>{gitHubdata.gitHubUsername}</a></p>
                <p>GitHub Repository: {gitHubdata.gitHubRepository}</p>
                </li>
            ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}

    </div>
    <div>
      <h1>Search Results</h1>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: '20px' }}>
              <h2>{book.volumeInfo.title}</h2>
              {book.volumeInfo.authors && <p>Author(s): {book.volumeInfo.authors.join(', ')}</p>}
              {/* {book.volumeInfo.description && <p>{book.volumeInfo.description}</p>} */}
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    </>
  );
}

export default ResultsPage;

// import React, { useEffect, useState } from 'react';
// import { UserData, User } from '../interfaces/UserData';
// import { GitHubProfile } from '../interfaces/GitHubProfile';
// import { Book } from '../interfaces/Book'; // Ensure this path is correct

// const Results = () => {
//     const [user, setUser] = useState<User | null>(null);
//     const [githubProfile, setGitHubProfile] = useState<GitHubProfile | null>(null);
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         const searchQuery = queryParams.get('query') || '';

    
//         fetch('/api/user/1')
//             .then((response) => response.json())
//             .then((data) => setUser(data))
//             .catch((error) => console.error('Error fetching user data:', error));


//         fetch('https://api.github.com/users/your-github-username')
//             .then((response) => response.json())
//             .then((data) => setGitHubProfile(data))
//             .catch((error) => console.error('Error fetching GitHub profile:', error));

//         fetch('https://www.googleapis.com/books/v1/volumes?q=subject:programming')
//             .then((response) => response.json())
//             .then((data) => {
//                 const booksData = data.items.map((item) => ({
//                     title: item.volumeInfo.title,
//                     authors: item.volumeInfo.authors,
//                     infoLink: item.volumeInfo.infoLink,
//                 }));
//                 setBooks(booksData);
//             })
//             .catch((error) => console.error('Error fetching books:', error));
//     }, []);

//     if (!user || !githubProfile) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <header>
//                 <h1>Search Results</h1>
//             </header>
//             <section>
//                 <h2>Name: {user.name}</h2>
//                 <img src={githubProfile.avatar_url} alt="Profile" />
//                 <p>GitHub Username: <a href={githubProfile.html_url}>{githubProfile.login}</a></p>
//                 <p>GitHub Repository: {githubProfile.public_repos}</p>
//                 <p>Expertise Level: {user.expertiseLevel}</p>
//                 <h3>Reference Books:</h3>
//                 <ul>
//                     {books.map((book, index) => (
//                         <li key={index}>
//                             <a href={book.infoLink}>{book.title}</a> by {book.authors.join(', ')}
//                         </li>
//                     ))}
//                 </ul>
//                 <p>Contact: {user.email}</p>
//             </section>
//         </div>
//     );
// };

// export default Results;


