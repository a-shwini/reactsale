import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with", username, password); // Debugging line

    // Dummy authentication: Replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
      console.log("Authentication successful"); // Debugging line
      setIsAuthenticated(true); // Update authentication state
      navigate('/sale-orders');
    } else {
      console.log("Authentication failed"); // Debugging line
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#282c34' }}>
      <form onSubmit={handleLogin} style={{ padding: '2rem', borderRadius: '5px', background: '#fff' }}>
        <h2 className='text-center text-uppercase mb-4'>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>
            Username:
            <input type="text" className='user' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" className='userpassword' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
        </div>
        <button type="submit" className='btn mt-3'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


