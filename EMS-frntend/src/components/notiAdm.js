import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './notiAdm.css';
import Empnav from './empnav';
import Navbar from './navbar';

function NotiAdm() {
  const notifications = [
    {
      id: 1,
      name: 'Ravi',
      type: 'Leave Request',
      description: 'Requested leave for 3 days starting on 18/09/2023',
      department: 'Web Development',
      team: 'T1'
    },
    {
      id: 2,
      name: 'Ravi',
      type: 'Leave Request',
      description: 'Requested leave for 3 days starting on 18/09/2023',
      department: 'Web Development',
      team: 'T1'
    },
    {
      id: 3,
      name: 'Ravi',
      type: 'Leave Request',
      description: 'Requested leave for 3 days starting on 18/09/2023',
      department: 'Web Development',
      team: 'T1'
    },
    {
      id: 4,
      name: 'Ravi',
      type: 'Leave Request',
      description: 'Requested leave for 3 days starting on 18/09/2023',
      department: 'Web Development',
      team: 'T1'
    },
    {
      id: 5,
      name: 'Ravi',
      type: 'Leave Request',
      description: 'Requested leave for 3 days starting on 18/09/2023',
      department: 'Web Development',
      team: 'T1'
    },
    
    // Add more notifications here...
  ];

  return (
    <div>
    <Navbar/>
      <div className="notification-container">
        <h3 className="notification-title">Notifications</h3>
        {notifications.map(notification => (
          <div key={notification.id} className="notification-item">
            <div className="notification-header">
              <strong className="notification-name">{notification.name}</strong>
              <div className="notification-actions">
                <div className="notification-type">{notification.type}</div>
                <div className="notification-icons">
                  <FaCheckCircle className="accept-icon" size={30}  />
                  <FaTimesCircle className="reject-icon" size={30} />
                </div>
              </div>
            </div>
            <div className="notification-description">
              <p className="description-text">{notification.description}</p>
              <p className="notification-meta">
              <span className="notification-department-team">
              Department: {notification.department} | Team: {notification.team}
            </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotiAdm;
