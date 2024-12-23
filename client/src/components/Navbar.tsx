
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);
  //const location = useLocation();

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
       checkLogin();
  }, [loginCheck])

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Skills Sprout</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <li className='nav-item'>
            <button type='button'>
              <Link to='/login'>Sign in</Link>
            </button>
          </li>
        ) : (
          <>
          <li>
          <div className='nav-item'>
            <button type='button' id='Search'>
              <Link to='/search' >Home</Link>
            </button>
            </div>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => {
              auth.logout();
              setLoginCheck(false);
            }}>Logout</button>
          </li>
          
          </>
        )
      }
      </ul>
    </div>
  )
}

export default Navbar;

