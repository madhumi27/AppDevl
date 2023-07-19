import React from 'react';
import { departments } from './departmentData';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
  const randomDepartmentIndex = Math.floor(Math.random() * departments.length);
  const randomDepartment = departments[randomDepartmentIndex];
  const randomEmployeeIndex = Math.floor(Math.random() * randomDepartment.employees.length);
  const randomEmployee = randomDepartment.employees[randomEmployeeIndex];

  return (
    <div className="employee-details">
      <h2>Random Employee Details</h2>
      <div className="employee-card">
        <p className="detail">ID: {randomEmployee.id}</p>
        <p className="detail">First Name: {randomEmployee.firstName}</p>
        <p className="detail">Last Name: {randomEmployee.lastName}</p>
        <p className="detail">Phone: {randomEmployee.phone}</p>
        <p className="detail">Date of Join: {randomEmployee.dateOfJoin}</p>
        <p className="detail">Date of Birth: {randomEmployee.dateOfBirth}</p>
        <p className="detail">Role: {randomEmployee.role}</p>
        <p className="detail">Gender: {randomEmployee.gender}</p>
        <p className="detail">Email: {randomEmployee.email}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
