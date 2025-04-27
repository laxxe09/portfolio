import React from 'react';
import './EasyEats.css'; 

const EasyEats = () => {
  return (
    <div className="easy-eats-page">
      <div className="project-item">
      <h1 className="project-title" style={{ color: '#E6746B' }}>Easy Eats</h1>

        <h4 className="project-subtitle" style={{ color: '#E6746B;' }}>
          A CSE 493E group project focused on restaurant accessibility design.
          
        </h4>
        <div className="github-link-section">
          <p>🔗 View this project on GitHub:</p>
          <a
            href="https://github.com/your-username/easy-eats" 
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            github.com/your-username/easy-eats
          </a>
        </div>

        <section className="project-section">
          <h5 className="section-heading">IDEA</h5>
          <p>
            Easy Eats was inspired by the article “Dear Restaurants, Your Inaccessibility Is the Opposite of Hospitality”
            by Ace Ratcliff, who described frustrating experiences as a wheelchair user. Our team recognized the ongoing
            inaccessibility in many dining spaces. So we designed Easy Eats, a platform for finding and rating
            restaurants based on accessibility features like ramps, seating, and restroom access.
          </p>
        </section>

        <section className="project-section">
          <p>
            Think Yelp, but accessibility-focused. Users can search restaurants, view detailed accessibility scores,
            and leave reviews based on their real experiences. The platform emphasizes high-contrast visuals,
            semantic hierarchy, keyboard navigation, and intersectional feedback (like service dog support and
            sensory-friendly environments).
          </p>
          <p>
            While we aimed for broad geographic coverage, our current implementation is localized near the University
            of Washington campus.
          </p>
        </section>

        <section className="project-section">
          <h5 className="section-heading">FINAL PRODUCT</h5>
          <p>
            While time was short, we successfully built and connected core platform components. The frontend is
            responsive and mirrors our Figma prototype, including pages for listing restaurants, reviewing accessibility
            criteria, and submitting feedback. The backend uses a Python API to manage restaurants, reviews, and ratings.
          </p>
          <p>
            Currently, the platform runs locally, but we plan to host it for public access. The project showcases our
            design principles: usability, empathy, clean UI patterns, and technical integration. Future plans include
            user accounts, expanded categories, and full deployment.
          </p>
        </section>

        <iframe
          src="/poster.pdf"
          width="80%"
          height="1200px"
          title="Easy Eats Final Poster"
          className="project-poster"
          style={{ border: 'none', marginTop: '2rem' }}
        />
        
      </div>
    </div>
  );
};

export default EasyEats;
