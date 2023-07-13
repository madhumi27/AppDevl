import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import Home from './Home';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className="p-3 rounded w-25 border container">
    <h1>DiZzO</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
       
        <button type="submit" >Login</button>
        
      </form>
    </div>
    </div>
  );
};

export default Login;
