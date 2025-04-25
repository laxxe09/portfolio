import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Assuming you're using this CSS file for styling

const Projects = () => {
  return (
    <div className="projects-overview">
      <h1 className="projects-header">Project Overview</h1>
      <div className="projects-list">
        {/* Project 1: Easy Eats */}
        <div className="project-card">
          <h3 className="project-title">
            <Link to="/easyeats" className="project-link">
              Easy Eats
            </Link>
          </h3>
          <p className="project-description">
            A platform to find and rate restaurants based on accessibility features like ramps, seating arrangements, and restroom access.
          </p>
        </div>

        {/* Project 2: Finance Tracker */}
        <div className="project-card">
          <h3 className="project-title">
            <Link to="/financetracker" className="project-link">
              Finance Tracker
            </Link>
          </h3>
          <p className="project-description">
            A web app to track personal expenses, with interactive charts and customizable categories for budgeting and financial planning.
          </p>
        </div>

        {/* Project 3: PokémonBinder */}
        <div className="project-card">
          <h3 className="project-title">
            <Link to="/pokemonbinder" className="project-link">
              PokémonBinder
            </Link>
          </h3>
          <p className="project-description">
            A virtual binder to organize and track your Pokémon card collection, with the ability to categorize and share your collection.
          </p>
        </div>

        {/* Project 4: Portfolio Platform */}
        <div className="project-card">
          <h3 className="project-title">
            <Link to="/portfolioplatform" className="project-link">
              Portfolio Showcase Platform
            </Link>
          </h3>
          <p className="project-description">
            A web app that allows you to showcase your portfolio, showcasing design principles, technical abilities, and visual appeal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;