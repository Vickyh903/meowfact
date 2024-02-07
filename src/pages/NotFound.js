import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './NotFound.css';



const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>
        <Link to="/">Go to Homepage</Link> {/* Provide a link back to the home page */}
      </p>
    </div>
  );
};

export default NotFound;
