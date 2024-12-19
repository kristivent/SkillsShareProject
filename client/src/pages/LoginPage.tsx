// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         // Add your login logic here
//         console.log('Logging in with', username, password);
//     };

//     const navigateToCreateAccount = () => {
//         navigate('/create-account');
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>Skill Sprout</h1>
//             <div style={{ margin: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     style={{ padding: '10px', width: '200px', marginBottom: '10px' }}
//                 />
//             </div>
//             <div style={{ margin: '20px' }}>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={{ padding: '10px', width: '200px', marginBottom: '10px' }}
//                 />
//             </div>
//             <div style={{ margin: '20px' }}>
//                 <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
//                     Login
//                 </button>
//             </div>
//             <div style={{ margin: '20px' }}>
//                 <button onClick={navigateToCreateAccount} style={{ padding: '10px 20px' }}>
//                     Create an Account
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label >Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
      <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
    
  )
};

export default Login;
