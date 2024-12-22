
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);

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
        <Link to='/'>Skill Sprout</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <li className='nav-item'>
            <button type='button'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
        ) : (
          <>
          <li>
          <div className='nav-item'>
            <button type='button' id='Search'>
              <Link to='/Home' >Home</Link>
            </button>
            </div>
          </li>
          <li className='nav-item'>
            <button type='button' onClick={() => {
              auth.logout();
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


// import {Link,useLocation} from 'react-router-dom';

// const Navbar = () => {
//   const currentPage = useLocation().pathname;
//   return (
//     <> 
//     <h1>Skills Sprout</h1>
//     <nav className="navbar">
    
//       <ul className='nav nav-tabs'>
//         <li className='nav-item'>
//           <h2>
//             <Link
//               to='/'
//               className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//             >
//               Home
//             </Link>
//           </h2>
//         </li>
//         <li className='nav-item'>
//           <h2>
//             <Link
//               to='/Logout'
//               className={currentPage === '/search' ? 'nav-link active' : 'nav-link'}
//             >
//               Logout
//             </Link>
//           </h2>
//         </li>

//         </ul>
//     </nav>
//     </>
    
//   )
// };

// export default Navbar;

