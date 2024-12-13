import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in with', username, password);
    };

    const navigateToCreateAccount = () => {
        navigate('/create-account');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Skill Sprout</h1>
            <div style={{ margin: '20px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '10px', width: '200px', marginBottom: '10px' }}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', width: '200px', marginBottom: '10px' }}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
                    Login
                </button>
            </div>
            <div style={{ margin: '20px' }}>
                <button onClick={navigateToCreateAccount} style={{ padding: '10px 20px' }}>
                    Create an Account
                </button>
            </div>
        </div>
    );
};

export default Login;