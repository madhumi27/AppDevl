import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLeaveRequest } from '../redux/actions/leaveactions';
import { useNavigate } from 'react-router-dom';
import Empnav from './empnav';
import { useSelector } from 'react-redux';
import './empLeaveForm.css';
import { setUserName } from '../redux/actions/leaveactions';
// const EmpLeaveForm = ({ addLeaveRequest }) => {
//   const [leaveType, setLeaveType] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();
// // const userName = useSelector((state) => state.leave.name);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new leave request object
//     // window.alert(`${userName}, your leave request has been sent!`);
//     const newLeaveRequest = {
//       leaveType,
//       startDate,
//       endDate,
//       reason,
      
//     };
//    const userName={
//       name
//    }
//     // Dispatch the addLeaveRequest action
//     addLeaveRequest(newLeaveRequest);
//     // setUserName(userName);
//     // Reset the form fields
//     setLeaveType('');
//     setStartDate('');
//     setEndDate('');
//     setReason('');
   
//     setName('');
//     // Display the alert message
    
//     setTimeout(() => {
//       // Display the alert message with the user's name from Redux
//       window.alert(`${name}, your leave request has been sent!`);

//     // Navigate to the home page
//     navigate('/emphome');
//   }, 100); 
//   };
//   const handleNameChange = (e) => {
//     const name = e.target.value;
//     setUserName(name);
//     setName(name);
//   };
//   return (
//     <div>
//     <Empnav/>
 

//     <div className="leave-form-container">
//       <h2 style={{color:"black"}}>Leave Request Form</h2>
//       <form onSubmit={handleSubmit}>
//       <div className="form-group">
//           <label>Name:</label>
//           <textarea
//             value={name}
//            onChange={handleNameChange}
//             // onChange={(e) => setName(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label>Leave Type:</label>
//           <input
//             type="text"
//             value={leaveType}
//             onChange={(e) => setLeaveType(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Start Date:</label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>End Date:</label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Reason:</label>
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// // Map dispatch to props
// const mapStateToProps = (state) => {
//   return {
//     userName: state.leave.name,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addLeaveRequest: (leaveRequest) => dispatch(addLeaveRequest(leaveRequest)),
//     setUserName: (name) => dispatch(setUserName(name)),

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EmpLeaveForm);

// import React, { useState } from 'react';
// import Empnav from './empnav';
import axios from 'axios';


const EmpLeaveForm = () => {
  const [empId, setEmpId] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new leave request object
    const newLeaveRequest = {
      
      startDate,
      endDate,
      reason,
      firstName,
      lastName,
      email,
      status: null, // Set status as null
      empId, // You can set the empId value here, e.g., if it's available in the frontend state or props
    };

    // Send the leave request to the backend using axios
    axios.post('http://localhost:8080/api/v1/auth/leavetables', newLeaveRequest)
      .then((response) => {
        // Reset the form fields
        
        setStartDate('');
        setEndDate('');
        setReason('');
        setFirstName('');
        setLastName('');
        setEmail('');

        // Display the alert message
        window.alert(`${firstName}, your leave request has been sent!`);

        // Navigate to the home page
        navigate('/emphome');
      })
      .catch((error) => {
        console.error('Error submitting leave request:', error);
        // Display error message if needed
      });
  };

  return (
    <div>
      <Empnav />

      <div className="leave-form-container">
        <h2 style={{ color: "black" }}>Leave Request Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Employee Id:</label>
            <input
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
         
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Reason:</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmpLeaveForm;
