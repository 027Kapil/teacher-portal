// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ROUTE } from '../utils';
import { selectLogin } from '../../store/login/loginSelector';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn=useSelector(selectLogin)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Hire Me Please</Link>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li><Link to={ROUTE.HOME}>Home</Link></li>
          <li><Link to={ROUTE.ABOUT_US}>About</Link></li>
          <li><Link to={ROUTE.SERVICES}>Services</Link></li>
          <li><Link to={ROUTE.JOB_SEARCH}>Job Search</Link></li>
          <li><Link to={ROUTE.REGISTRATION}>Registration</Link></li>
          <li><Link to={{pathname:ROUTE.VIEW_AND_UPDATE_SCHOOL, 
                      search: '?schoolId=67581142e18a00e9c6384a66'}}>View School</Link></li>
          <li><Link to={{pathname:ROUTE.VIEW_AND_UPDATE_TEACHER, 
          search: '?teacherProfileId=67580ca237337839d9d1b0cf'}}>View Profile</Link></li>
           <li><Link to={ROUTE.ADD_JOB}>Add Jobs</Link></li>
          <li><Link to={ROUTE.OPEN_JOBS}>Open Jobs</Link></li>
          <li><Link to={ROUTE.MY_SCHOOL_JOBS}>My School Jobs</Link></li>
          <li><Link to={ROUTE.CONTACT_US}>Contact</Link></li>
          {!isLoggedIn && (<li><Link to={ROUTE.LOGIN}>Login</Link></li>)}
        
          {isLoggedIn && (<li><Link to={ROUTE.LOGOUT}>Logout</Link></li>)}
        </ul>
      </nav>
      <div className="header__menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;


{/* <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/apply-job">Apply for Job</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/job-listings">Job Listings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">My Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </li> 
            </ul>*/}