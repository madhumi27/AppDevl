import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { departments } from './departmentData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './DepartmentPage.css';
import Navbar from './navbar';

function DepartmentPage() {
  
  const { id } = useParams();
  const departmentIndex = departments.findIndex((dept) => dept.id === Number(id));
  const department = departments[departmentIndex];

  const [showForm, setShowForm] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    role: '',
    gender: '',
    dateOfBirth: '',
    salary: '',
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employeeId) => {
    console.log(`Edit employee with ID: ${employeeId}`);
  };

  const handleDelete = (employeeId) => {
    console.log(`Delete employee with ID: ${employeeId}`);
  };

  const handleAssignTask = (employeeId) => {
    console.log(`Assign task to employee with ID: ${employeeId}`);
  };

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleAddEmployee = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: department.employees.length + 1,
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      phoneNumber: employeeData.phoneNumber,
      email: employeeData.email,
      role: employeeData.role,
      gender: employeeData.gender,
      dateOfBirth: employeeData.dateOfBirth,
      salary: employeeData.salary,
    };

    const updatedDepartment = {
      ...department,
      employees: [...department.employees, newEmployee],
    };

    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex] = updatedDepartment;

    // Perform any additional logic or API calls here to save the updated department data

    setEmployeeData({
      id: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      role: '',
      gender: '',
      dateOfBirth: '',
      salary: '',
    });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="department-page">
    <Navbar/>
      {department ? (
        <div>
          <h2>{department.name}</h2>
          <p>{department.description}</p>

          <h3>Employees:</h3>
          <div className="add-employee-container">
            <button className="add-employee-button" onClick={handleAddEmployee}>
              Add Employee
            </button>
          </div>

          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Date of Join</th>
              </tr>
            </thead>
            <tbody>
              {department.employees.map((employee) => (
                <React.Fragment key={employee.id}>
                  <tr
                    onClick={() => handleRowClick(employee)}
                    className={selectedEmployee === employee ? 'blink' : ''}
                  >
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.role}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.dateOfJoin}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {selectedEmployee && (
            <div className="popup-container">
              <div className="popup">
                <div className="employee-details">
                  <h2>Employee Details</h2>
                  <p>
                    Name: {selectedEmployee.firstName} {selectedEmployee.lastName}
                  </p>
                  <p>Phone: {selectedEmployee.phone}</p>
                  <p>Email: {selectedEmployee.email}</p>
                  <p>Role: {selectedEmployee.role}</p>
                  <p>Gender: {selectedEmployee.gender}</p>
                  <p>Date of Birth: {selectedEmployee.dateOfBirth}</p>
                  <p>Salary: {selectedEmployee.salary}</p>
                </div>
                <div className="employee-actions">
                  <EditIcon onClick={() => handleEdit(selectedEmployee.id)} style={{ cursor: 'pointer' }} />
                  <DeleteIcon onClick={() => handleDelete(selectedEmployee.id)} style={{ cursor: 'pointer' }} />
                  <button onClick={() => handleAssignTask(selectedEmployee.id)}>Assign Task</button>
                </div>
              </div>
            </div>
          )}
          {showForm && (
            <div className="popup-container">
              <div className="popup">
                <h2>Add Employee</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-column">
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={employeeData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-column">
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={employeeData.lastName}
                        onChange={handleInputChange}
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
                        value={employeeData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-column">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={employeeData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-column">
                      <label htmlFor="role">Role:</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={employeeData.role}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-column">
                      <label htmlFor="gender">Gender:</label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={employeeData.gender}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-column">
                      <label htmlFor="dateOfBirth">Date of Birth:</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={employeeData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-column">
                      <label htmlFor="salary">Salary:</label>
                      <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={employeeData.salary}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Department not found</p>
      )}
    </div>
  );
}

export default DepartmentPage;
