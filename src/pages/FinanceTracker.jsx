import React from 'react';
import './FinanceTracker.css';

const FinanceTracker = () => {
  return (
    <div className="project-item">
      <h1 className="project-title" style={{ color: '#E6746B' }}>Finance Tracker</h1>
      <h4 className="project-subtitle" style={{ color: '#E6746B;' }}>
        A web app that helps visualize spending, track categories, and build better financial habits.
      </h4>
      <div className="github-link-section">
        <p>🔗 View this project on GitHub:</p>
        <a
          href="https://github.com/your-username/finance-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          github.com/your-username/finance-tracker
        </a>
      </div>
      <section className="project-section">
        <p>
          In the beginning of college, I found myself struggling to keep track of my expenses. Between bills, groceries,
          and occasional splurges, I needed a better way to manage my finances. So I created this personal finance
          tracker to help me visualize spending patterns and make smarter decisions.
        </p>
        <p>
          The app lets you log expenses, tag them by category, and view monthly summaries with interactive charts.
          Whether you're tracking groceries, rent, or savings goals, the interface is flexible and visually intuitive.
        </p>
       
        
      </section>

      
    </div>
  );
};

export default FinanceTracker;
