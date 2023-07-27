// import React, { useEffect } from 'react';
// import Empnav from './empnav';
// import './profile.css'; // CSS file for styling
// import employeeImage from './employee-image.jpg';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useState } from 'react';
// const Profile = () => {
//   const { userId } = useParams();
//   const [userData, setUserData] = useState({
//     empId: 0,
//     personal: {
//       personalId: 0,
//       firstName: '',
//       lastName: '',
//       dob: '',
//       gender: '',
//       maritalStatus: '',
//       password: '',
//     },
//     contact: {
//       contactId: 0,
//       city: '',
//       state: '',
//       email: '',
//       phoneNumber: '',
//       gitHub: '',
//       linkedIn: '',
//     },
//     work: {
//       workId: 0,
//       deptName: '',
//       position: '',
//       team: '',
//       hireDate: '',
//       salary: 0,
//     },
//   });

//   // useEffect(() => {
//   //   const taskTable = document.querySelector('.task-details table');
//   //   const meetingTable = document.querySelector('.meeting-details table');
//   //   const tableHeader = taskTable.querySelector('thead');
//   //   const thCells = tableHeader.querySelectorAll('th');

//   //   // Calculate the width of the table header cells
//   //   thCells.forEach((th) => {
//   //     const width = th.offsetWidth;
//   //     th.style.width = `${width}px`;
//   //   });

//   //   // Update the width of the table header cells when the window is resized
//   //   const handleResize = () => {
//   //     thCells.forEach((th) => {
//   //       const width = th.offsetWidth;
//   //       th.style.width = `${width}px`;
//   //     });
//   //   };

//   //   window.addEventListener('resize', handleResize);
//   useEffect(() => {
//     // Fetch data from the backend based on the userId from the URL parameter
//     if (userId) {
//       axios
//         .get(`http://localhost:8080/api/v1/auth/empalls/${userId}`)
//         .then((response) => {
          
//           console.log(response.data);
//           setUserData(response.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching user data:', error);
//         });
//     }
//   }, [userId]);
//   //   return () => {
//   //     window.removeEventListener('resize', handleResize);
//   //   };
//   // }, []);

//   return (
//     <div>
//     <Empnav/>
//       <div className="profile-container">
//         <div className="top-section">
//           <div className="left-section">
//             <img className="profile-image" src={employeeImage} alt="Profile" />
//           </div>
          
//           <div className="personal-info box">
//           <h1 className="name1"> hy             
//           </h1>
//             <h3 className="name1">Web Development:</h3>
//             <p className="name1">Employee ID:</p>
//             <h5 className="name1">
//               RATINGS: <b>8/10</b>
//             </h5>
//           </div>
//         </div>
       
        
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Empnav from './empnav';
import './profile.css'; // CSS file for styling
import employeeImage from './employee-image.jpg';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem } from '@mui/material';

// EditWorkDetailsForm component for editing work details
const EditWorkDetailsForm = ({ workDetails, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(workDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the updated work details to the parent component
  };

  // Array of departments
  const departments = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Network Administration' },
    { id: 3, name: 'Database Administration' },
    { id: 4, name: 'UI/UX Design' },
    { id: 5, name: 'Project Management' },
    { id: 6, name: 'Quality Assurance' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label>Department Name:</label>
      <Select name="deptName" variant="outlined" value={formData.deptName} onChange={handleChange} required>
        {departments.map((department) => (
          <MenuItem key={department.id} value={department.name}>
            {department.name}
          </MenuItem>
        ))}
      </Select>

      <label>Position:</label>
      <TextField name="position" variant="outlined" value={formData.position} onChange={handleChange} required />

      <label>Team:</label>
      <TextField name="team" variant="outlined" value={formData.team} onChange={handleChange} required />

      <label>Hire Date:</label>
      <TextField name="hireDate" type="date" variant="outlined" value={formData.hireDate} onChange={handleChange} required />

      <label>Salary:</label>
      <TextField name="salary" type="number" variant="outlined" value={formData.salary} onChange={handleChange} required />

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

// EditPersonalDetailsForm component for editing personal details
const EditPersonalDetailsForm = ({ personalDetails, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(personalDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the updated personal details to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <TextField name="firstName" variant="outlined" value={formData.firstName} onChange={handleChange} required />

      <label>Last Name:</label>
      <TextField name="lastName" variant="outlined" value={formData.lastName} onChange={handleChange} required />

      <label>Date of Birth:</label>
      <TextField name="dob" type="date" variant="outlined" value={formData.dob} onChange={handleChange} required />

      <label>Gender:</label>
      <TextField name="gender" variant="outlined" value={formData.gender} onChange={handleChange} required />

      <label>Marital Status:</label>
      <TextField name="maritalStatus" variant="outlined" value={formData.maritalStatus} onChange={handleChange} required />

      <label>Password:</label>
      <TextField name="password" type="password" variant="outlined" value={formData.password} onChange={handleChange} required />

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

// EditContactDetailsForm component for editing contact details
const EditContactDetailsForm = ({ contactDetails, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(contactDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the updated contact details to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>City:</label>
      <TextField name="city" variant="outlined" value={formData.city} onChange={handleChange} required />

      <label>State:</label>
      <TextField name="state" variant="outlined" value={formData.state} onChange={handleChange} required />

      <label>Email:</label>
      <TextField name="email" type="email" variant="outlined" value={formData.email} onChange={handleChange} required />

      <label>Phone Number:</label>
      <TextField name="phoneNumber" variant="outlined" value={formData.phoneNumber} onChange={handleChange} required />

      <label>GitHub:</label>
      <TextField name="gitHub" variant="outlined" value={formData.gitHub} onChange={handleChange} required />

      <label>LinkedIn:</label>
      <TextField name="linkedIn" variant="outlined" value={formData.linkedIn} onChange={handleChange} required />

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

const Profile = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('personal');
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showEditWorkForm, setShowEditWorkForm] = useState(false);
  const [showEditPersonalForm, setShowEditPersonalForm] = useState(false);
  const [showEditContactForm, setShowEditContactForm] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    assignedBy: '',
    dueDate: '',
    attachment: '',
  });
  const [deletionSuccess, setDeletionSuccess] = useState(false); // State to track deletion success

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/auth/empalls/${userId}`)
      .then((response) => {
        setEmployeeDetails(response.data);
      })
      .catch((error) => console.error('Error fetching employee data:', error));
  }, [userId]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  

  if (!employeeDetails) {
    return <div>Loading...</div>;
  }

  const {
    personal: { firstName, lastName, dob, gender, maritalStatus, password },
    contact: { city, state, email, phoneNumber, gitHub, linkedIn },
    work: { deptName, position, team, hireDate, salary },
  } = employeeDetails;



 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/v1/auth/tasks`, {
        ...taskData,
        empId: userId,
      })
      .then((response) => {
        alert('Task added successfully!!');
        console.log('Task added successfully:', response.data);
        setShowTaskForm(false);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  const handleEditWorkDetails = () => {
    setShowEditWorkForm(true);
  };
  const handlePersonalDetailsSubmit = () => {
    setShowEditPersonalForm(true);
  };

  const handleContactDetailsSubmit = () => {
    setShowEditContactForm(true);
  };

  const handleWorkDetailsSubmit = (updatedWorkDetails) => {
    axios
      .put(`http://localhost:8080/api/v1/auth/works/${userId}`, updatedWorkDetails)
      .then((response) => {
        alert('Work details updated successfully!');
        console.log('Work details updated successfully:', response.data);
        setShowEditWorkForm(false);
        axios
          .get(`http://localhost:8080/api/v1/auth/empalls/${userId}`)
          .then((response) => {
            setEmployeeDetails(response.data);
          })
          .catch((error) => console.error('Error fetching employee data:', error));
      })
      .catch((error) => {
        console.error('Error updating work details:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-top-section">
          <div className="profile-left-section">
            <img className="profile-image" src={employeeImage} alt="Profile" />
          </div>
          <div className="profile-info-container">
            <h1 className="profile-name1">{`${firstName} ${lastName}`}</h1>
            <h3 className="profile-dept">{deptName}</h3>
            <p className="profile-empId">Employee ID: {userId}</p>
          </div>
          <div className="profile-actions">
          <IconButton className="icon" aria-label="edit" color="primary" onClick={handleEditWorkDetails}>
          <EditIcon /><span>Edit WorkDetails</span>
        </IconButton>
        <IconButton className="icon" aria-label="edit personal details" color="primary" onClick={() => setShowEditPersonalForm(true)}>
          <EditIcon /><span>Edit PersonalDetails</span>
        </IconButton>
        <IconButton className="icon" aria-label="edit contact details" color="primary" onClick={() => setShowEditContactForm(true)}>
          <EditIcon /><span>Edit ContactDetails</span>
        </IconButton>
           
          </div>
        </div>
        <div className="profile-heading-buttons">
          <div
            className={`profile-heading-button ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => handleTabClick('personal')}
          >
            Personal
          </div>
          <div
            className={`profile-heading-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleTabClick('contact')}
          >
            Contact
          </div>
          <div
            className={`profile-heading-button ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => handleTabClick('work')}
          >
            Work
          </div>
        </div>
        <div className="profile-details-container">
          {activeTab === 'personal' && (
            <div className={`profile-details-content ${activeTab === 'personal' ? 'active' : ''}`}>
              <p>
                <b>First Name:</b> {firstName}
              </p>
              <p>
                <b>Last Name:</b> {lastName}
              </p>
              <p>
                <b>Date of Birth:</b> {dob}
              </p>
              <p>
                <b>Gender: </b>
                {gender}
              </p>
              <p>
                <b>Marital Status:</b> {maritalStatus}
              </p>
              <p>
                <b>Password:</b> {password}
              </p>
            </div>
          )}
          {activeTab === 'contact' && (
            <div className={`profile-details-content ${activeTab === 'contact' ? 'active' : ''}`}>
              <p>City: {city}</p>
              <p>State: {state}</p>
              <p>Email: {email}</p>
              <p>Phone Number: {phoneNumber}</p>
              <p>GitHub: {gitHub}</p>
              <p>LinkedIn: {linkedIn}</p>
            </div>
          )}
          {activeTab === 'work' && (
            <div className={`profile-details-content ${activeTab === 'work' ? 'active' : ''}`}>
              <p>Department Name: {deptName}</p>
              <p>Position: {position}</p>
              <p>Team: {team}</p>
              <p>Hire Date: {hireDate}</p>
              <p>Salary: {salary}</p>
            </div>
          )}
        </div>
      </div>

      

      {/* Dialog for EditWorkDetailsForm */}
      <Dialog open={showEditWorkForm} onClose={() => setShowEditWorkForm(false)}>
        <DialogTitle>Edit Work Details</DialogTitle>
        <DialogContent>
          {/* Pass the work details and the onSubmit handler to the EditWorkDetailsForm */}
          <EditWorkDetailsForm
            workDetails={employeeDetails.work}
            onSubmit={handleWorkDetailsSubmit}
            onClose={() => setShowEditWorkForm(false)}
          />
        </DialogContent>
      </Dialog>
      {/* Dialog for EditPersonalDetailsForm */}
      <Dialog open={showEditPersonalForm} onClose={() => setShowEditPersonalForm(false)}>
        <DialogTitle>Edit Personal Details</DialogTitle>
        <DialogContent>
          {/* Pass the personal details and the onSubmit handler to the EditPersonalDetailsForm */}
          <EditPersonalDetailsForm
            personalDetails={employeeDetails.personal}
            onSubmit={handlePersonalDetailsSubmit}
            onClose={() => setShowEditPersonalForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog for EditContactDetailsForm */}
      <Dialog open={showEditContactForm} onClose={() => setShowEditContactForm(false)}>
        <DialogTitle>Edit Contact Details</DialogTitle>
        <DialogContent>
          {/* Pass the contact details and the onSubmit handler to the EditContactDetailsForm */}
          <EditContactDetailsForm
            contactDetails={employeeDetails.contact}
            onSubmit={handleContactDetailsSubmit}
            onClose={() => setShowEditContactForm(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
