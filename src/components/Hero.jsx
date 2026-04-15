import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="fade-in">
            <h1 className="hero-text primary">I’m Arif Agustyawan,</h1>
          </div>
          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h1 className="hero-text secondary">
              an AI Engineer crafting<br/>
              real-world intelligent solutions.
            </h1>
          </div>
        </div>
        
        <div className="hero-portrait-wrapper fade-in" style={{ transitionDelay: '0.4s' }}>
          <img 
            src="/IMG_2225.jpg" 
            alt="Arif Agustyawan" 
            className="hero-portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
