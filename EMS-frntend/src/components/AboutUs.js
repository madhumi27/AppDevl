import React from 'react';
import './AboutUs.css'; // CSS file for styling
import Navbar from './navbar';
const AboutUs = () => {
  return (
    <div className="about-us-container">
    <Navbar></Navbar>
      <h2>About Us</h2>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to our Employee Management System! We provide a comprehensive solution for managing
            employee data and streamlining administrative tasks.
          </p>
          <p>
            Our system allows you to efficiently handle employee records, including personal information,
            contact details, employment history, and more. With our user-friendly interface, you can easily
            navigate through the system and access the information you need.
          </p>
          <p>
            The Employee Management System simplifies various administrative processes, such as employee
            onboarding, leave management, attendance tracking, and performance evaluations. Our goal is to
            empower organizations to optimize their workforce management and enhance productivity.
          </p>
          <p>
            If you have any questions or feedback, please feel free to reach out to our support team. We
            are dedicated to providing excellent service and continuous improvement of our system to meet
            your organization's unique requirements.
          </p>
          <p>Thank you for choosing our Employee Management System!</p>
        </div>
        <div className="about-us-image">
          <img src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/employee-engagement.png" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
