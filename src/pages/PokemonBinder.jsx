import React from 'react';
import './PokemonBinder.css';

const PokemonBinder = () => {
  return (
    <div className="project-item">
      <h1 className="project-title"  style={{ color: '#E6746B' }}>PokémonBinder (In progress)</h1>
      
      <h4 className="project-subtitle"  style={{ color: '#E6746B;' }}>
        A digital binder for organizing and sharing your Pokémon card collection online.
      </h4>
      <div className="github-link-section">
        <p>🔗 View this project on GitHub:</p>
        <a
          href="https://github.com/laxxe09/pokemon-card-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          github.com/laxxe09/pokemon-card-tracker
        </a>
      </div>

      <section className="project-section">
        <p>
          Like many fans, I spent hours organizing Pokémon cards in a binder, trading with friends,
          and celebrating shiny pulls. But I wanted a way to relive that joy without risking damage to my cards
          or carrying a binder around.
        </p>
        <p>
          That’s when I decided to build a virtual <strong>PokémonBinder</strong>,  a web app 
          where I can log my collection,
          organize it by sets or types, and share it with others online.
        </p>
        <p>
          Users can upload cards, tag them by generation or rarity, and show off their collection visually.
          It's designed for collectors who want a modern, safe, and fun way to manage their cards.
        </p>
        <p>
        I used TypeScript for a smoother development experience 
         and styled the interface with Tailwind CSS for a clean, responsive design.
          One of the key features of the app is its integration with the <strong>Pokémon TCG API</strong>,
           which allows users to search for cards and fetch real-time data directly from 
           the official database. I structured the project using standard React 
           conventions and set up a .env file to securely manage API keys and environment 
           variables.
        </p>
      </section>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <div className="sketch-section">
  
      
      <p className="sketch-caption">
  Part of my current Pokemon card collection!
</p>
<img
    src="/collection1.jpeg"
    alt="collection"
    className="collection-image"
  />
  <img
    src="/collection2.jpeg"
    alt="collection"
    className="collection-image"
  />
  <p className="sketch-caption">
  Initial idea / sketches:
</p>
   

  <img
    src="/Pokebinder-sketch.jpg"
    alt="Initial sketches"
    className="sketch-image"
  />
   <p className="sketch-caption">
  So far, I have the base template of the page.
</p>

  <img
    src="/current_design.jpg"
    alt="Initial sketches"
    className="sketch-image"
  />
 
</div>

</div>


      
    </div>
  );
};

export default PokemonBinder;
