import React from 'react';
import Navbar from './navbar';
import './home.css';

function Home() {
  // Get the current date and time
  const now = new Date();
  const date = now.toDateString();
  const time = now.toLocaleTimeString();
  const topEmployees = [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      image: "employee1.jpg",
      profileLink: "/profile/1"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Supervisor",
      image: "employee2.jpg",
      profileLink: "/profile/2"
    },
    {
      id: 3,
      name: "David Johnson",
      position: "Team Lead",
      image: "employee3.jpg",
      profileLink: "/profile/3"
    }
  ];

  return (
    <div className='home'>
      <h2 className='h2css'>
        <span>Hello</span>
        <span>AdMin</span>
      </h2>
      <div className="white-box">
        <div className="box-content">
          <div className="box-title">Total Employees</div>
          <div className="box-value">250</div>
        </div>
        <div className="box-content">
          <div className="box-title">Payroll Processed</div>
          <div className="box-value">140/250</div>
        </div>
        <div className="box-content">
          <div className="box-title">Working Days</div>
          <div className="box-value">22</div>
        </div>
      </div>
      <div className="date-time">
        <span className="label">Date:</span> {date} &nbsp;
        <span className="label">Time:</span> {time}
      </div>
      
      <div id="my-works" className="my-works-section">
      <h3 className="section-title">My Works</h3>
      <div className="todo-box">
        <div className="todo-header">
          <h4 className="todo-title">To-Do</h4>
          <span className="todo-deadline">Deadline: August 31, 2023</span>
        </div>
        <ul className="todo-list">
          <li className="todo-item">Task 1</li>
          <li className="todo-item">Task 2</li>
          <li className="todo-item">Task 3</li>
          {/* Add more tasks as needed */}
        </ul>
      </div>
      
      <div className="top-employees-section">
      <h3 className="section-title">Top Employees This Week</h3>
      <div className="top-employees-cards">
        {topEmployees.map(employee => (
          <div key={employee.id} className="employee-card">
            <div className="employee-image">
              <img src={employee.image} alt={employee.name} />
            </div>
            <div className="employee-info">
              <h4 className="employee-name">{employee.name}</h4>
              <span className="employee-position">{employee.position}</span>
            </div>
            <a href={employee.profileLink} className="profile-link">View Profile</a>
          </div>
        ))}
      </div>
    </div>

        </div>
      
      </div>
  );
}

export default Home;
