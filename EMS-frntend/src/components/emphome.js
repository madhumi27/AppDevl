import React, { useEffect, useState } from 'react';
import Empnav from './empnav';
import './emphome.css';
import empimage from './employee-image.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Emphome() {
  const [userData, setUserData] = useState({
    empId: 0,
    personal: {
      personalId: 0,
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      maritalStatus: '',
      password: '',
    },
    contact: {
      contactId: 0,
      city: '',
      state: '',
      email: '',
      phoneNumber: '',
      gitHub: '',
      linkedIn: '',
    },
    work: {
      workId: 0,
      deptName: '',
      position: '',
      team: '',
      hireDate: '',
      salary: 0,
    },
  });

  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    // Fetch data from the backend based on the userId from the URL parameter
    if (userId) {
      axios
        .get(`http://localhost:8080/api/v1/auth/empalls/${userId}`)
        .then((response) => {
          // Update the state with the fetched user data
          console.log(response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
   // Fetch tasks data
  axios
    .get(`http://localhost:8080/api/v1/auth/tasks/employee/${userId}`)
    .then((response) => {
      setTasks(response.data);
    })
    .catch((error) => {
      console.error('Error fetching tasks data:', error);
    });
  
  // Fetch meetings data
  axios
    .get(`http://localhost:8080/api/v1/auth/meetings/employee/${userId}`)
    .then((response) => {
      setMeetings(response.data);
    })
    .catch((error) => {
      console.error('Error fetching meetings data:', error);
    });
}, [userId]);

  const topEmployees = [
    {
      id: 1,
      name: 'Manohari',
      position: 'Manager',
      image: 'https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?b=1&s=612x612&w=0&k=20&c=gApYcn6GubvJA-YoMO00KZAShv66MHEwrsAbcmaq_cQ=',
      profileLink: '/profile/1',
    },
    {
      id: 2,
      name: 'Riya M',
      position: 'Supervisor',
      image: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=',
      profileLink: '/profile/2',
    },
    {
      id: 3,
      name: 'John Doe',
      position: 'Team Lead',
      image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-businessman-passageway_625516-948.jpg',
      profileLink: '/profile/3',
    },
  ];



  const calculateTimeLeft = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();

    const diffInMilliseconds = end - now;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  return (
    <div className="employee-home">
      <Empnav  userId={userId}/>

      <div className="employee-content">
        {userData? (
          <div className="employee-info">
            <h2 className="h2css">
              <span>Hello</span>
              <span>{userData.personal.firstName}</span>
            </h2>

            <div className="employee-personal-info">
              <h3 className="employee-section-title">Personal Information</h3>
              <div className="employee1-details">
                <div className="employee-detail">
                  <span className="employee-label">Name: </span>
                  <span className="employee-value">{userData.personal.firstName}</span>
                </div>
                <div className="employee-detail">
                  <span className="employee-label">Position:</span>
                  <span className="employee-value">{userData.work.position}</span>
                </div>
                <div className="employee-detail">
                  <span className="employee-label">Department:</span>
                  <span className="employee-value">{userData.work.deptName}</span>
                </div>
                <div className="employee-detail">
                  <span className="employee-label">Email:</span>
                  <span className="employee-value">{userData.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div className="employee-image-container">
          <img className="employee-image" src={empimage} alt="Employee" />
        </div>
      </div>

      <div className="my-tasks-section" id="my-tasks-section">
        <h3 className="section-title">My Tasks</h3>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Topic</th>
              <th>Assigned By</th>
              <th>Time Left</th>
              <th>Task ID</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.taskId}>
              <td>{task.title}</td>
              <td>{task.assignedBy}</td>
              <td>{calculateTimeLeft(task.dueDate)} days</td>
              <td>{task.taskId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="meetings-section" id="meetings-section">
      <h3 className="section-title">Meetings</h3>
      <table className="meetings-table">
        <thead>
          <tr>
            <th>Meeting Title</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Manager</th>
            <th>Meeting ID</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.meetingId}>
              <td>{meeting.meetingTitle}</td>
              <td>{meeting.startTime}</td>
              <td>{meeting.endTime}</td>
              <td>{meeting.manager}</td>
              <td>{meeting.meetingId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      <div className="top-employees-section">
        <h3 className="section-title">Top Employees of This Month</h3>
        <div className="top-employees-cards">
          {topEmployees.map((employee) => (
            <div key={employee.id} className="employee1-card">
              <div className="employee1-image">
                <img src={employee.image} alt={employee.name} />
              </div>
              <div className="employee1-info">
                <h4 className="employee-name">{employee.name}</h4>
                <span className="employee-position">{employee.position}</span>
              </div>
              <a href={employee.profileLink} className="profile-link">
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Emphome;
