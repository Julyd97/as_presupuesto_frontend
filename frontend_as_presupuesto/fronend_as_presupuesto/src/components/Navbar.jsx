// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoGM from '../assets/LogoGM.png';

const Navbar = () => {
  return (
    <nav>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to="/" className='navbar-brand'><img src={LogoGM} alt="LogoGM" width="50" height="60"/></Link>
        </li>
        <li className='nav-item'>
          <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        </li>
        <li className='nav-item'>
          <Link to="/login" className='nav-link'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;