import React from 'react';
import './PortfolioPlatform.css';

const DesignWrld = () => {
  return (
    <div className="project-item">
      <h1 className="project-title" style={{ color: '#E6746B' }}>Design Wrld</h1>
      <h4 className="project-subtitle" style={{ color: '#E6746B' }}>
        A design research project exploring how students find portfolio ideas and connect with industry professionals.
      </h4>
      <div className="github-link-section">
        <p>🔗 Link Coming Soon:</p>
        <a
          
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Coming soon
        </a>
      </div>
      <section className="project-section">
        <p>
          As part of a design-focused course, my team and I set out to understand how students in HCDE and CSE programs
          discover portfolio ideas and seek critique from professionals. We focused on UW students currently building or
          planning to build a portfolio, especially those looking to enter the design or engineering workforce.
        </p>
        <p>
          Our methods included surveys to quickly gather responses from the community, and one-on-one interviews to gain
          deeper insight into students' experiences. We asked about their challenges, platforms they’ve used, and how
          they connect with professionals online.
        </p>
        <p>
          Each team member recruited and led one interview, while another assisted by taking notes. Survey responses were
          distributed across platforms like DUB Slack and EdStem.
        </p>
        <p>
          This project covered multiple phases including proposal development, survey design, and research planning.
          It helped us understand students' real frustrations and opportunities for supporting portfolio ideation more effectively.
        </p>
        <p><strong className="progress-label">Current progress:</strong> 
        </p><p>We are in the process of conducting user research and will later identify 
          key patterns and insights.  </p>
      </section>
    </div>
  );
};

export default DesignWrld;
