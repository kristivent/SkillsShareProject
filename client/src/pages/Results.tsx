import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/Results.css";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

interface GitHubData {
  gitHubUsername: string;
  gitHubRepository: number;
  gitHubProfile: string;
  avatar_url: string;
}

interface CombinedData {
  search: string;
  name: string;
  email: string;
  expertiseLevel: string;
  books: Book[];
  gitHubData: GitHubData;
}

function ResultsPage() {
  const { state } = useLocation();
  const data = state as CombinedData;

  const [showBooks, setShowBooks] = useState(false);

  return (
    <div className="results-page">
      <h2>Results for your search: {data.search}</h2>

      <div className="content-container">
        <div className="card">
          <div className="skill-buddy">
            <h3>Skill Buddy</h3>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Expertise Level: {data.expertiseLevel}</p>
            <p>
              GitHub Username:{" "}
              <a href={data.gitHubData.gitHubProfile}>
                {data.gitHubData.gitHubUsername}
              </a>
            </p>
            <p>Repositories: {data.gitHubData.gitHubRepository}</p>
          </div>

          <div className="gitimage">
            <img
              src={data.gitHubData.avatar_url}
              alt="GitHub Profile Pic"
              className="profile-pic"
            />
          </div>
        </div>

        <div className="books-section">
          <button onClick={() => setShowBooks(!showBooks)}>
            {showBooks ? "Hide Reference Books" : "Show Reference Books"}
          </button>

          {showBooks && (
            <div className="books-container">
              {/* <h2>Reference Books:</h2> */}
              {data.books && data.books.length > 0 ? (
                data.books.map((book) => (
                  <div key={book.id} className="book-card">
                    <div className="book-text">
                      <h4>{book.volumeInfo.title}</h4>
                      {book.volumeInfo.authors && (
                        <p>Author(s): {book.volumeInfo.authors.join(", ")}</p>
                      )}
                      {book.volumeInfo.publisher && (
                        <p>Publisher: {book.volumeInfo.publisher}</p>
                      )}
                    </div>
                    {book.volumeInfo.imageLinks?.thumbnail && (
                      <img
                        className="book-image"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    )}
                  </div>
                ))
              ) : (
                <p>No books found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
