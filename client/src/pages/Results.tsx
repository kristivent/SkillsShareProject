import { useLocation } from 'react-router-dom';

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
  name: string;
  email: string;
  expertiseLevel: string;
  books: Book[];
  gitHubData: GitHubData;
}

function ResultsPage() {
  const { state } = useLocation();
  const data = state as CombinedData;

  return (
    <div>
      <h1>Results</h1>
      <section>
        <h2>Name: {data.name}</h2>
        <p>Email: {data.email}</p>
        <p>Expertise Level: {data.expertiseLevel}</p>
        <h3>GitHub Profile:</h3>
        <img
          src={data.gitHubData.avatar_url}
          alt="GitHub Profile Pic"
          style={{ width: '100px', borderRadius: '50%' }}
        />
        <p>
          GitHub Username:{' '}
          <a href={data.gitHubData.gitHubProfile}>
            {data.gitHubData.gitHubUsername}
          </a>
        </p>
        <p>Repositories: {data.gitHubData.gitHubRepository}</p>
      </section>

      <section>
        <h3>Reference Books:</h3>
        {data.books && data.books.length > 0 ? (
          <ul>
            {data.books.map((book) => (
              <li key={book.id}>
                <h4>{book.volumeInfo.title}</h4>
                {book.volumeInfo.authors && (
                  <p>Author(s): {book.volumeInfo.authors.join(', ')}</p>
                )}
                {book.volumeInfo.publisher && (
                  <p>Publisher: {book.volumeInfo.publisher}</p>
                )}
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    style={{ width: '100px' }}
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books found.</p>
        )}
      </section>
    </div>
  );
}

export default ResultsPage;