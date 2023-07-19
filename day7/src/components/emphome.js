import React from 'react';
import Empnav from './empnav';
import './emphome.css';
import empimage from './employee-image.jpg';

function Emphome() {
   const topEmployees = [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      image: "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?b=1&s=612x612&w=0&k=20&c=gApYcn6GubvJA-YoMO00KZAShv66MHEwrsAbcmaq_cQ=",
      profileLink: "/profile/1"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Supervisor",
      image: "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=",
      profileLink: "/profile/2"
    },
    {
      id: 3,
      name: "David Johnson",
      position: "Team Lead",
      image: "https://img.freepik.com/premium-photo/portrait-smiling-young-businessman-passageway_625516-948.jpg",
      profileLink: "/profile/3"
    }
  ];
  return (
    <div className="employee-home">
      <Empnav />

      <div className="employee-content">
        <div className="employee-info">
          <h2 className="h2css">
            <span>Hello</span>
            <span>Employee</span>
          </h2>

          <div className="employee-personal-info">
            <h3 className="employee-section-title" >Personal Information</h3>
            <div className="employee-details">
              <div className="employee-detail">
                <span className="employee-label">Name:</span>
                <span className="employee-value">John Doe</span>
              </div>
              <div className="employee-detail">
                <span className="employee-label">Position:</span>
                <span className="employee-value">Software Engineer</span>
              </div>
              <div className="employee-detail">
                <span className="employee-label">Department:</span>
                <span className="employee-value">Engineering</span>
              </div>
              <div className="employee-detail">
                <span className="employee-label">Email:</span>
                <span className="employee-value">johndoe@example.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="employee-image-container">
          <img className="employee-image" src={empimage} alt="Employee" />
        </div>
      </div>
      
      <div className="top-employees-section">
      <h3 className="section-title">Top Employees Of This Month </h3>
      <div className="top-employees-cards">
        {topEmployees.map(employee => (
          <div key={employee.id} className="employee1-card">
            <div className="employee1-image">
              <img src={employee.image} alt={employee.name} />
            </div>
            <div className="employee1-info">
              <h4 className="employee-name">{employee.name}</h4>
              <span className="employee-position">{employee.position}</span>
            </div>
            <a href={employee.profileLink} className="profile-link">View Profile</a>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Emphome;
