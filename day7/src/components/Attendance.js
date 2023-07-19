import React, { useState } from 'react';
import './Attendance.css';
import { departments } from './departmentData';
import Navbar from './navbar';

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Filter employees based on search term
  const filteredEmployees = departments.flatMap((department) =>
    department.employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort employees based on selected option
  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortBy === 'name') {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === 'position') {
      return a.role.localeCompare(b.role);
    }
    return 0;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="attendance-container">
      <Navbar />
      <h2>Employee Attendance</h2>
      <div className="search-bar">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="filter-sort">
          <select value={sortBy} onChange={handleSort} className="sort-select">
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="position">Position</option>
          </select>
        </div>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee) => {
            const department = departments.find((dept) => dept.employees.includes(employee));
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.role}</td>
                <td>{department.name}</td>
                <td>{department.name}</td>
                <td className={employee.status === 'Logged Out' ? 'status-red' : 'status-green'}>
                  {employee.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
