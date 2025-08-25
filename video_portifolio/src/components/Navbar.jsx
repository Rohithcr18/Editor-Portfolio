import React from 'react';

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="nav-bar" id="navbar">
      <div className="nav-content">
        <div className="about-name">ROHITH CR</div>
        <div className="nav-links">
          <a onClick={() => onNavClick('hero')}>Home</a>
          <a onClick={() => onNavClick('about')}>About</a>
          <a onClick={() => onNavClick('skills')}>Skills</a>
          <a onClick={() => onNavClick('work')}>Work</a>
          <a onClick={() => onNavClick('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
