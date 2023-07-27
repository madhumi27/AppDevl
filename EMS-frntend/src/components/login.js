

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);

//     if (username === 'employee@gmail.com' && password === 'employee') {
//       navigate('/emphome');
//     } else if (username === 'admin@gmail.com' && password === 'admin') {
//       navigate('/home');
//     }
//   };

//   return (
//     <div className="loginPage">
//       <div className="container">
//         <h1>DiZzO</h1>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={username}
//             onChange={handleUsernameChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />

//           <button type="submit">Login</button>
//           <p className="sign-up-link">
//             Don't have an account? <Link className='signupbut' to="/addemp">Sign Up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { useDispatch } from 'react-redux';

function Login (props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();
const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });
      
      // Assuming the response data contains the token, save it to localStorage or a state variable for authentication
      localStorage.setItem('accessToken', response.data.token);
      
      const eresponse = await axios.get(`http://localhost:8080/api/v1/auth/getUserByEmail?email=${email}`);

      const userId = eresponse.data;
      // console.log(eresponse.data);
      localStorage.setItem('userId', userId);
     
      dispatch({ type: 'SET_EMAIL', payload: { email: email } });
      // Redirect to the appropriate page after successful login
      if (email === 'admin@gmail.com' && password === 'admin') {
        navigate('/home');
      }
      else{
      navigate('/emphome/' + userId);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert("Invalid Login");
      // Handle authentication failure, display an error message, etc.
    }
  };

  return (
    <div className="loginPage">
      <div className="container">
        <h1>DiZzO</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
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

          <button type="submit">Login</button>
          <p className="sign-up-link">
            Don't have an account? <Link className="signupbut" to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
