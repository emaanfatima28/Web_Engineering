import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 208vh;
  background: #f3f1f5;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  color: #6a1b9a;
  text-align: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #5d4037;
`;

const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    border-color: #6a1b9a;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    border-color: #6a1b9a;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.7rem;
  background: #6a1b9a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #512e5f;
  }
`;

const Token = styled.div`
  margin-top: 1rem;
  word-break: break-word;
  font-size: 0.75rem;
  color: #4e342e;
`;

const LoginFormStyledComponents = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'Viewer' });
  const [token, setToken] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', formData);
      setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>Login Portal</Title>
        <form onSubmit={handleSubmit}>
          <Label>Username *</Label>
          <Input type="text" name="username" value={formData.username} onChange={handleChange} required />
          <Label>Password *</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <Label>Role *</Label>
          <Select name="role" value={formData.role} onChange={handleChange} required>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </Select>
          <Button type="submit">Login</Button>
        </form>
        {token && <Token>Token: {token}</Token>}
      </Card>
    </Wrapper>
  );
};

export default LoginFormStyledComponents;
