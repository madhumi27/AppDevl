import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { EmpSidebar } from './empsidebar';
import './navbar.css';
import { IconContext } from 'react-icons';
import Typography from '@mui/material/Typography';
import Login from './login';

function Empnav() {
  const [sidebar, setSidebar] = useState(false);
  const [messageDropdown, setMessageDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showMessageDropdown = () => setMessageDropdown(!messageDropdown);
  const showProfileDropdown = () => setProfileDropdown(!profileDropdown);

  const scrollToMyWorks = () => {
    const myWorksSection = document.getElementById('my-tasks');
    if (myWorksSection) {
      window.scrollTo({
        top: myWorksSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                padding: '50px'
              }}
            >
              DiZzO
            </Typography>
          </div>
          <div className='nav-icons'>
            <div className='nav-icon-wrapper' onClick={scrollToMyWorks}>
              <span className='my-works-button'>My Task</span>
            </div>
          </div>
          <div className='nav-icons'>
          <div className='message'>
            <div className='nav-icon-wrapper' onClick={showMessageDropdown}>

              <FaIcons.FaEnvelope className='nav-icon' />
              {messageDropdown && (
                <div className='dropdown'>
                  {/* Message dropdown content */}
                </div>
              )}
            </div>
            </div>

            <div className='nav-icon-wrapper' onClick={showProfileDropdown}>
              <FaIcons.FaUserCircle className='nav-icon' />
              {profileDropdown && (
                <div className='dropdown'>
                  {/* Profile dropdown content */}
                  <Link to='/'>Logout</Link>
                  <Link to='#'>Settings</Link>
                  <Link to='/profile'>Profile</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {EmpSidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Empnav;
