import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './DepartmentPage.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

function DepartmentPage() {
  const { deptName } = useParams();
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Fetch employee data from the API based on the department name
    
    axios.get(`http://localhost:8080/api/v1/auth/empalls/department/${deptName}`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error('Error fetching employee data:', error));
  }, [deptName]);

 

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    window.location.href = `/profile/${employee[0]}`;
  };

  return (
    <div className="department-page">
      <Navbar />
      <div>
        <h2 style={{color:"black"}}>{deptName}</h2>
      

        <h3>Employees:</h3>
        <div className="add-employee-container">
          <Link to="/addemp" className="add-employee-button">
            <Button sx={{ color: 'white' , width:"1205px" }}>Add Employee</Button>
          </Link>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Department Name</th>
              <th>Position</th>
              <th>Team</th>
              <th>Salary</th>
             
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <React.Fragment key={employee[0]}>
              
                <tr
                  onClick={() => handleRowClick(employee)}
                  className={selectedEmployee === employee ? 'blink' : ''}
                >
                  <td>{employee[0]}</td>
                  <td>{employee[1]}</td>
                  <td>{employee[2]}</td>
                  <td>{employee[3]}</td>
                  <td>{employee[4]}</td>
                  <td>{employee[5]}</td>
                  <td>{employee[6]}</td>
                  <td>{employee[7]}</td>
                  
                </tr>
            
              </React.Fragment>
            ))}
          </tbody>
        </table>
         
      </div>
    </div>
  );
}

export default DepartmentPage;
