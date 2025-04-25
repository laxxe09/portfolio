import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="section">
      <img src="/profile.png" alt="Profile" className="profile-pic" />
      <div className="about-text">
        <h2>Hello, my name is Carla Acosta</h2>
        <p>
          I'm a transfer student at UW Seattle studying Computer Science.<br />
          Outside school and work, I enjoy cooking, baking, and trying new cuisines!
        </p>
      </div>
    </section>
  );
};

export default About;