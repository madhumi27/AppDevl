import React from 'react';
import Navbar from './navbar';
import './home.css';
import { useState } from 'react';
import Footer from './Footer';

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
      image: "https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?b=1&s=612x612&w=0&k=20&c=gApYcn6GubvJA-YoMO00KZAShv66MHEwrsAbcmaq_cQ=",
      profileLink: "/profile/1"
    },
    {
      id: 2,
      name: "Naveena M",
      position: "Supervisor",
      image: "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=",
      profileLink: "/profile/2"
    },
    {
      id: 3,
      name: "Madhu mitha",
      position: "Team Lead",
      image: "https://img.freepik.com/premium-photo/portrait-smiling-young-businessman-passageway_625516-948.jpg",
      profileLink: "/profile/3"
    }
  ];
  const [userAuthenticated, setUserAuthenticated] = useState(true);
  return (
    
    <div className='home'>
    <Navbar/>
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
        {userAuthenticated && <Footer />}
      </div>
  );
}

export default Home;
