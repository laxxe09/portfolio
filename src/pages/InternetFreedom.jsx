import React from 'react';
import './Nionswift.css';

const InternetFreedom = () => {
  return (
    <div className="project-item">
      <h1 className="project-title" style={{ color: '#E6746B' }}>Data Visualization - Internet Freedom</h1>
      <h4 className="project-subtitle" style={{ color: '#E6746B' }}>
      How does digital freedom vary across countries around the world in 2024?
      </h4>
      <div className="github-link-section">
        <p>🔗 View this project:</p>
        <a
          href='https://internet-freedom-0e07aa.pages.cs.washington.edu'
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
         Data Visualization Project - Internet Freedom
        </a>
      </div>
      
    </div>
  );
};

export default InternetFreedom;
