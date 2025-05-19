import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.scss';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
        role,
      });
      setToken(response.data.token);
    } catch (error) {
      setToken('Login failed');
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login Portal</h2>

        <label htmlFor="username">Username *</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />

        <label htmlFor="password">Password *</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <label htmlFor="role">Role *</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="Admin">Admin</option>
          <option value="Viewer">Viewer</option>
          <option value="Editor">Editor</option>
        </select>

        <button type="submit">Login</button>

        {token && <p className="token">Token: {token}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
