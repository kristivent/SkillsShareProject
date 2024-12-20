import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authapi";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null); // State for error messages


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(e.target);
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err: any) {
      if (err) {
        setError(err.message || 'An error occurred'); // Display error from API response
        console.error('Failed to login all error', err);
        setError('Username or password is incorrect. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
        //console.error('Failed to l mesage', err.response.data.message);
        console.log('Failed to login else error', err);
      
      }
      console.error('Failed to login outer loop', err);
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
        {error && <p style={{ color: 'black' }}>{error}</p>} {/* Display error message */}
      </form>
    </div>
    
  )
};

export default Login;
