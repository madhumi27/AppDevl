

import React, { useState } from 'react';
import './AddEmployeeForm.css';
import axios from 'axios';

const AddEmployeeForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    password:" ",
    maritalStatus: '',
    // Contact Details
    city: '',
    state: '',
    email: '',
    phoneNumber: '',
    gitHub: '',
    linkedIn: '',
    // Work Details
    deptName: '',
    position: '',
    team: '',
    hireDate: '',
    salary: 0,
  });

  const departments = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Network Administration' },
    { id: 3, name: 'Database Administration' },
    { id: 4, name: 'UI/UX Design' },
    { id: 5, name: 'Project Management' },
    { id: 6, name: 'Quality Assurance' },
  ];

  const genders = ['Male', 'Female', 'Other'];
  const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:8080/api/v1/auth/getUserByEmail?email=${formData.email}`)
    .then((response)=>{
      if (response.data) {
        const userId = response.data;

        const empData = {
          "empId":userId,
            "personal": {
              "firstName": formData.firstName,
              "lastName": formData.lastName,
              "dob": formData.dob,
              "maritalStatus": formData.maritalStatus,
              "gender": formData.gender,
              "password": formData.password
            },
            "contact": {
                "city": formData.city,
               "state": formData.state ,
              "email": formData.email,
              "phoneNumber": formData.phoneNumber,
              "gitHub": formData.gitHub,
              "linkedIn": formData.linkedIn
            },
           "work": {
              "deptName": formData.deptName,
              "hireDate": formData.hireDate,
              "position": formData.position,
              "salary": formData.salary,
              "team":formData.team
      
            },
          };
      
      
      
      
      axios.post("http://localhost:8080/api/v1/auth/empalls", empData)
      .then((response) => {
        console.log('Data added successfully!', response.data);
        alert('Employee added successfully!');
        setFormData({
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            password: '',
            maritalStatus: '',
            city: '',
            state: '',
            email: '',
            phoneNumber: '',
            gitHub: '',
            linkedIn: '',
            deptName: '',
            position: '',
            team: '',
            hireDate: '',
            salary: 0,
          });
          // Set the step back to 1 to start the form from the beginning
          setStep(1);
      }
      )
    
    .catch((error) => {
      console.error('Error adding data:', error);
      alert('An error occurred while adding the employee. Please check the console for details.');
      
      // If there's an error, you can handle it and show an error message to the user.
    });
  }
    else{
      console.error('User with the provided email not found.');
      alert('User with the provided email not found. Please check the email and try again.');
    }

      
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      alert('An error occurred while fetching user data. Please check the console for details.');
    });
};

    
    
  

  return (
    <div className="add-employee-form-container">
      <form className="add-employee-form" onSubmit={handleFormSubmit}>
        {step === 1 && (
          <>
            <h2>Personal Details</h2>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="gender">Gender:</label>
                <select
                id="gender"
                name="gender"
                className='select'
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="maritalStatus">Marital Status:</label>
                <select
                id="maritalStatus"
                name="maritalStatus"
                className='select'
                value={formData.maritalStatus}
                onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                required
              >
                <option value="">Select Marital Status</option>
                {maritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handleNext}>
                Next (Contact Info)
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Contact Details</h2>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="gitHub">GitHub:</label>
                <input
                  type="text"
                  id="gitHub"
                  name="gitHub"
                  value={formData.gitHub}
                  onChange={(e) => setFormData({ ...formData, gitHub: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="linkedIn">LinkedIn:</label>
                <input
                  type="text"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handlePrevious}>
                Previous (Personal Info)
              </button>
              <button type="button" onClick={handleNext}>
                Next (Work Details)
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h2>Work Details</h2>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="deptName">Department Name:</label>
                <select
                id="deptName"
                name="deptName"
                className='select'
                value={formData.deptName}
                onChange={(e) => setFormData({ ...formData, deptName: e.target.value })}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
              </div>
              <div className="form-column">
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="team">Team:</label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  value={formData.team}
                  onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="hireDate">Hire Date:</label>
                <input
                  type="date"
                  id="hireDate"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  required
                />
              </div>
              <div className="form-column">
                <label htmlFor="salary">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-buttons">
              <button type="button" onClick={handlePrevious}>
                Previous (Contact Info)
              </button>
              <button type="submit">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};


export default AddEmployeeForm;
