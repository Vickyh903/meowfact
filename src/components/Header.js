import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // New function to close the navbar when a link is clicked
  const closeNav = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header-logo" onClick={closeNav}>
        <img src={`${process.env.PUBLIC_URL}/logo/logo.png`}  alt="Logo" width="100"/>
      </NavLink>
      <nav className={isNavVisible ? "navbar active" : "navbar"}>
        <ul className="nav-links">

          <li onClick={closeNav}>
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>

          <li onClick={closeNav}>
            <NavLink to="/fun-meow-photos" activeClassName="active-link">
              Fun Meow Photos
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="/meme-generator" activeClassName="active-link">
              Meme Generator
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink to="/contact-us" activeClassName="active-link">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="mobile-icon" onClick={toggleNav}>
        <i className={isNavVisible ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </header>
  );
};

export default Header;
