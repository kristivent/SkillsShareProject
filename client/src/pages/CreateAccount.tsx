import React, { useState } from 'react';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        githubUsername: '',
        githubPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>GitHub Username (optional):</label>
                    <input
                        type="text"
                        name="githubUsername"
                        value={formData.githubUsername}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>GitHub Password (optional):</label>
                    <input
                        type="password"
                        name="githubPassword"
                        value={formData.githubPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;