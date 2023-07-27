// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './signup.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);
    
//     // Perform sign up logic or API call here
//   };

//   return (
//     <div className="signupPage">
//       <div className="container">
//         <h1>DiZzO</h1>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
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
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           />

//           <button type="submit">Sign Up</button>
//           <p className="login-link">
//             Already have an account? <Link to="/">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    try {
      const empData = {
        personal: {
          firstName: name,
          password: password,
        },
        contact: {
          email: email,
        },
      };
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      // const empResponse = await axios.post('http://localhost:8080/api/v1/auth/empalls', empData);
      // console.log('Empall created:', empResponse.data);


      // Handle successful registration response
      console.log('Registration successful:', response.data);
      alert('Registration successful! You can now log in.');
    } catch (error) {
      console.error('Error occurred during registration:', error);
      // Handle registration failure, display an error message, etc.
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="signupPage">
      <div className="container">
        <h1>DiZzO</h1>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />

          <button type="submit">Sign Up</button>
          <p className="login-link">
            Already have an account? <Link to="/">Login</Link>
          </p>

     
        </form>
      </div>
    </div>
  );
};

export default SignUp;
