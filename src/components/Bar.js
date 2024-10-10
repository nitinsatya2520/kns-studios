import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bar.css';
import nitin from '../assets/images/KNS STUDIOS 1.png';

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bar">
      <a href="https://www.youtube.com/@kns_studios">
        <img src={nitin} alt="KNS Studios Logo" className="profile-ima" />
      </a>
      <button className="menu-toggle" onClick={handleToggle}>
        {isOpen ? '  ' : '☰'}
      </button>
      <ul className={`bar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={handleToggle}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleToggle}>About</Link>
        </li>
        <li>
          <Link to="/us" onClick={handleToggle}>Gallery</Link>
        </li>
        <li>
          <Link to="/properties" onClick={handleToggle}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleToggle}>Contact</Link>
        </li>
        <li>
          <Link to="/staff" onClick={handleToggle}>Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Bar;
