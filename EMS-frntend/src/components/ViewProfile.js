import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Empnav from './empnav';
import './viewprofile.css'; // CSS file for styling
import employeeImage from './employee-image.jpg';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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

const ViewProfile = () => {
  const { empId } = useParams();
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const [activeTab, setActiveTab] = useState('personal');
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showEditWorkForm, setShowEditWorkForm] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    assignedBy: '',
    dueDate: '',
    attachment: '',
  });
  const [meetingData, setMeetingData] = useState({
    meetingTitle: '',
    startTime: '',
    endTime: '',
    manager: '',
  });
  const [deletionSuccess, setDeletionSuccess] = useState(false); // State to track deletion success


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/auth/empalls/${empId}`)
      .then((response) => {
        setEmployeeDetails(response.data);
      })
      .catch((error) => console.error('Error fetching employee data:', error));
  }, [empId]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const handleScheduleMeeting = () => {
    setShowMeetingForm(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleDeleteEmployee = () => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      axios
        .delete(`http://localhost:8080/api/v1/auth/empalls/${empId}`)
        .then((response) => {
          alert('Employee deleted successfully!');
          setDeletionSuccess(true); // Set the deletionSuccess state to trigger re-fetching data
          window.location.href = `/api/empalls/department/${deptName}`;
          
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
        });
    }
  };

  if (!employeeDetails) {
    return <div>Loading...</div>;
  }

  const {
    personal: { firstName, lastName, dob, gender, maritalStatus, password },
    contact: { city, state, email, phoneNumber, gitHub, linkedIn },
    work: { deptName, position, team, hireDate, salary },
  } = employeeDetails;

  const handleAssignTask = () => {
    setShowTaskForm(true);
  };

  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
  };

  const handleTChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleMeetingSubmit = (e) => {
    e.preventDefault();

    // Assuming empId is available in the current component's state
    // const empId = employeeDetails.personal.empId;

    axios
      .post(`http://localhost:8080/api/v1/auth/meetings`, {
        ...meetingData,
        empId: empId,
      })
      .then((response) => {
        alert('Meeting scheduled successfully!');
        console.log('Meeting scheduled successfully:', response.data);
        setShowMeetingForm(false);
      })
      .catch((error) => {
        console.error('Error scheduling meeting:', error);
      });
  };
  const handleCloseMeetingForm = () => {
    setShowMeetingForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/v1/auth/tasks`, {
        ...taskData,
        empId: empId,
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

  const handleWorkDetailsSubmit = (updatedWorkDetails) => {
    axios
      .put(`http://localhost:8080/api/v1/auth/works/${empId}`, updatedWorkDetails)
      .then((response) => {
        alert('Work details updated successfully!');
        console.log('Work details updated successfully:', response.data);
        setShowEditWorkForm(false);
        axios
          .get(`http://localhost:8080/api/v1/auth/empalls/${empId}`)
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
            <p className="profile-empId">Employee ID: {empId}</p>
          </div>
          <div className="profile-actions">
            <IconButton className="icon" aria-label="edit" color="primary" onClick={handleEditWorkDetails}>
              <EditIcon />
            </IconButton>
            <IconButton className="icon" aria-label="delete" color="error" onClick={handleDeleteEmployee}>
              <DeleteIcon />
            </IconButton>

            <Button className="icon" variant="contained" color="primary" onClick={handleAssignTask}>
              Assign a Task
            </Button>
           <br></br>
            <Button variant="contained" color="primary" onClick={handleScheduleMeeting}>
        Schedule Meeting
      </Button>
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
{/* Meeting Form Popup */}
{showMeetingForm && (
  <div className="meeting-form-overlay">
    <div className="meeting-form-container">
      <h2>Schedule a Meeting</h2>
      <form onSubmit={handleMeetingSubmit}>
        <label className="task-form-label">Meeting Title:</label>
        <TextField
          name="meetingTitle"
          variant="outlined"
          value={meetingData.meetingTitle}
          onChange={handleChange}
          className="task-form-input"
          required
        />

        <label className="task-form-label">Start Time:</label>
        <TextField
          name="startTime"
          type="datetime-local"
          variant="outlined"
          value={meetingData.startTime}
          onChange={handleChange}
          className="task-form-input"
          required
        />

        <label className="task-form-label">End Time:</label>
        <TextField
          name="endTime"
          type="datetime-local"
          variant="outlined"
          value={meetingData.endTime}
          onChange={handleChange}
          className="task-form-input"
          required
        />

        <label className="task-form-label">Manager:</label>
        <TextField
          name="manager"
          variant="outlined"
          value={meetingData.manager}
          onChange={handleChange}
          className="task-form-input"
          required
        />

        <div className="meeting-form-buttons">
          <Button onClick={handleCloseMeetingForm} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Schedule Meeting
          </Button>
        </div>
      </form>
    </div>
  </div>
)}

      {/* Task Form */}
      {showTaskForm && (
        <div className="task-form-overlay">
          <div className="task-form-container">
            <h2>Assign a Task</h2>
            <form onSubmit={handleSubmit}>
              <label className="task-form-label">Title:</label>
              <TextField
                name="title"
                variant="outlined"
                value={taskData.title}
                onChange={handleTChange}
                className="task-form-input"
                required
              />

              <label className="task-form-label">Assigned By:</label>
              <TextField
                name="assignedBy"
                variant="outlined"
                value={taskData.assignedBy}
                onChange={handleTChange}
                className="task-form-input"
                required
              />

              <label className="task-form-label">Due Date:</label>
              <TextField
                name="dueDate"
                type="date"
                variant="outlined"
                value={taskData.dueDate}
                onChange={handleTChange}
                className="task-form-input"
                required
              />

              <label className="task-form-label">Attachment:</label>
              <TextField
                name="attachment"
                variant="outlined"
                value={taskData.attachment}
                onChange={handleTChange}
                className="task-form-input"
              />

              <div className="task-form-buttons">
                <Button onClick={handleCloseTaskForm} color="primary">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Assign Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default ViewProfile;
