import React from 'react';
import './Nionswift.css';

const Nionswift = () => {
  return (
    <div className="project-item">
      <h1 className="project-title" style={{ color: '#E6746B' }}>Nion Swift Plugin</h1>
      <h4 className="project-subtitle" style={{ color: '#E6746B' }}>
      A Basic Image Processing Panel to Nion Swift that streamlines commonly used image processing tasks.
      </h4>
      <div className="github-link-section">
        <p>🔗 View this project on Github:</p>
        <a
          href='https://github.com/laxxe09/nionswift-plugin-basic-image-processing'
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Nionswift Plugin
        </a>
      </div>
      
    </div>
  );
};

export default Nionswift;
