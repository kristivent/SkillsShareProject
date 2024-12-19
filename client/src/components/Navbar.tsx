import {Link,useLocation} from 'react-router-dom';

const Navbar = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar">
    
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/search'
              className={currentPage === '/search' ? 'nav-link active' : 'nav-link'}
            >
              Search
            </Link>
          </h2>
        </li>

        </ul>
    </nav>
    
  )
};

export default Navbar;

