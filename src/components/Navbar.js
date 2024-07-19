import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import nitin from '../assets/images/KNS STUDIOS 1.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <img src={nitin} alt="Profile" className="profile-ima" />
      <div className="navbar-logo">K N S STUDIOS</div>
      <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/us" onClick={toggleMenu}>Gallery</Link>
        </li>
        <li>
          <Link to="/properties" onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/staff" onClick={toggleMenu}>Team</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
    </nav>
    
  );
}

export default Navbar;
