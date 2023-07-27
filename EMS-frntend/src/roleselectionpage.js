import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './roleselectionpage.css';

const RoleSelectionPage = () => {
  return (
    <div className="role-selection-page">
      <h2 >Login As</h2>
      <div className="role-icons">
        <Link to="/Login" className="role-button">
          <FontAwesomeIcon icon={faUser} size="3x" />
          <span>Employee</span>
        </Link>
        
        <Link to="/Login" className="role-button">
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <span>Admin</span>
        </Link>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
