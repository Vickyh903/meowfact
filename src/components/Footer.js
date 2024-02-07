import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
    <img src="../logo/logo.png" alt="website logo" width="80px"/>
      <div className="footer-content">
        <p>© Created by Vicky He. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
