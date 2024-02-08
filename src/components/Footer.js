import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
     <NavLink to="/" className="header-logo">
    <img className="footer-logo" src={`${process.env.PUBLIC_URL}/logo/logo.png`} alt="website logo" width="80px"/>
    </NavLink>
      
        <div className="footer-links">
          <NavLink to="/fun-meow-photos" activeClassName="active-link">
              Fun Meow Photos
          </NavLink>
          <NavLink to="/meme-generator" activeClassName="active-link">
              Meme Generator
          </NavLink>
          <NavLink to="/contact-us" activeClassName="active-link">
              Contact Us
          </NavLink>
        </div>
        
        <div className="footer-rights">
        <p> © Created by Vicky He. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
