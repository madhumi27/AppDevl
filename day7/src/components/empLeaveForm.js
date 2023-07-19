import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLeaveRequest } from '../redux/actions/leaveactions';
import { useNavigate } from 'react-router-dom';

import './empLeaveForm.css';

const EmpLeaveForm = ({ addLeaveRequest }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new leave request object
    const newLeaveRequest = {
      leaveType,
      startDate,
      endDate,
      reason,
      name
    };

    // Dispatch the addLeaveRequest action
    addLeaveRequest(newLeaveRequest);

    // Reset the form fields
    setLeaveType('');
    setStartDate('');
    setEndDate('');
    setReason('');
    setName('');

    // Display the alert message
    window.alert(`${name}, your leave request has been sent!`);

    // Navigate to the home page
    navigate('/emphome');
  };

  return (
    <div className="leave-form-container">
      <h2 style={{color:"black"}}>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Leave Type:</label>
          <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
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
  );
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    addLeaveRequest: (leaveRequest) => dispatch(addLeaveRequest(leaveRequest))
  };
};

export default connect(null, mapDispatchToProps)(EmpLeaveForm);
