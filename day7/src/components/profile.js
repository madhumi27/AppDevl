import React from 'react';
import './profile.css'; // CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="top-section">
        <div className="left-section">
          <img className="profile-image" src="path_to_image" alt="Profile" />
        </div>
        <div className="personal-info box">
          <h1>Personal Info</h1>
        </div>
      </div>
      <div className="bottom-section">
        <div className="contact-info box">
          <h1>Contact</h1>
        </div>
        <div className="works-info box">
          <h1>Works</h1>
        </div>
        <div className="task-table box">
          <h1>Task</h1>
        </div>
      </div>
      <div className="bottom-section">
        <div className="meetings-table box">
          <h1>Meeting</h1>
        </div>
        <div className="attendance-table box">
          <h1>Attendance</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
