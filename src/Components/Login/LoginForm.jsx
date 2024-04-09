import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const authToken = data.token;
      localStorage.setItem('authToken', authToken);
      setLoggedIn(true);
      navigate("/Bed");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Background Video */}
      <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src="./Video/new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', maxWidth: '400px', margin: '0 auto' }}>
        <Typography variant="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>Login</Typography>
        {error && <Typography color="error" style={{ marginBottom: '10px', textAlign: 'center' }}>{error}</Typography>}
        {loggedIn && <Typography variant="body1" style={{ marginBottom: '10px', textAlign: 'center', color: 'green' }}>Login Successful!</Typography>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" style={{ width: '100%', display: 'block', marginTop: '15px', animation: 'fadeInUp 0.5s ease' }}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
