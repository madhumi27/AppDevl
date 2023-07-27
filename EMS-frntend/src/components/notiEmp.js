import React from 'react';
import './notiEmp.css';
import Empnav from './empnav';

function NotificationEmployee() {
  const notifications = [
    {
      id: 1,
      type: 'Task Assigned',
      description: 'You have been assigned a new task: "Create a report for Q3."',
      sender: 'John Doe',
      deadline: 'Due on 25/09/2023',
    },
    {
      id: 2,
      type: 'Leave Approved',
      description: 'Your leave request for 3 days has been approved.',
      sender: 'HR Admin',
    },
    {
        id: 3,
        type: 'Friend Message',
        description: 'You have a new message from your friend Alice: "Hey, how are you?"',
        sender: 'Alice',
    },
    {
      id: 4,
      type: 'Leave Disapproval',
      description: 'Your leave request for 10 days has been disapproved.',
      sender: 'HR Admin',
    },
    
    
    // Add more notifications here...
  ];

  const handleReplyClick = (sender) => {
    // You can implement the logic for handling the reply button click here
    console.log(`Reply to ${sender}`);
  };

  return (
    <div>
    <Empnav/>
    <div className="notification-container-employee">
      
      <h3 className="notification-title-employee">Employee Notifications</h3>
      {notifications.map(notification => (
        <div key={notification.id} className="notification-item-employee">
          <div className="notification-header-employee">
            <strong className="notification-type-employee">{notification.type}</strong>
            <div className="notification-actions-employee">
              <div className="notification-name-employee">{notification.sender}</div>
              {notification.deadline && <div className="notification-deadline-employee">{notification.deadline}</div>}
            </div>
          </div>
          <div className="notification-description-employee">
            <p className="description-text-employee">{notification.description}</p>
          </div>
          <div className="notification-reply-button">
            <button onClick={() => handleReplyClick(notification.sender)}>Reply to this message</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default NotificationEmployee;
