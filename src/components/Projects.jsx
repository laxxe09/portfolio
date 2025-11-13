import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; 

const Projects = () => {
  return (
    <div className="projects-overview">
      <h1 className="projects-header">Project Overview</h1>
      <div className="projects-list">


         {/* Project 1: Nion Swift Plugin */}
         <div className="project-card">
          <h3 className="project-title">
            <Link to="/nionswift" className="project-link">
              Nion Swift Plugin
            </Link>
          </h3>
          <p className="project-description">
          A Basic Image Processing Panel to Nion Swift that streamlines commonly used image processing tasks.
          </p>
        </div>
         {/* Project 2: Data Visualization Project - Internet Freedom*/}
         <div className="project-card">
          <h3 className="project-title">
            <Link to="/internet_freedom" className="project-link">
            Data Visualization Project - Internet Freedom
            </Link>
          </h3>
          <p className="project-description">
          How does digital freedom vary across countries around the world in 2024?
          </p>
        </div>

        {/* Project 3: DesignWrld */}
        <div className="project-card">
          <h3 className="project-title">
            <Link to="/designwrld" className="project-link">
              DesignWrld
            </Link>
          </h3>
          <p className="project-description">
            A web app that allows you to showcase your portfolio, showcasing design principles, technical abilities, and visual appeal.
          </p>
        </div>


        {/* Project 4: Easy Eats */}
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


        {/* Project 5: PokémonBinder */}
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

        {/* Project 6: Finance Tracker */}
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



      </div>
    </div>
  );
};

export default Projects;