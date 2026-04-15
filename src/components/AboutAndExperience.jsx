import React from 'react';
import './AboutAndExperience.css';

const AboutAndExperience = () => {
  return (
    <section className="about-experience-section fade-in">
      <div className="about-left fade-in delay-1">
        <p>I build intelligent systems that solve real-world problems — from computer vision to LLM-powered solutions, with a focus on reliability and impact.</p>
        <br/>
        <p>I also mentor aspiring engineers, helping them turn complex concepts into practical skills.</p>
        <br/>
        <p>Building AI with purpose — not just models, but solutions that actually work.</p>
      </div>

      <div className="experience-right fade-in delay-2">
        <div className="section-block">
          <h2 className="section-title">experience</h2>
          <div className="list-item">
            <h3 className="item-title">Senior AI & ML Scientist Assoc.</h3>
            <p className="item-subtitle">LinkAja</p>
            <p className="item-date">Jul 2024 - Present</p>
          </div>
          <div className="list-item">
            <h3 className="item-title">Python Developer</h3>
            <p className="item-subtitle">PT Toyota Motor Manufacturing Indonesia</p>
            <p className="item-date">Jan 2024 - Jul 2024</p>
          </div>
          <div className="list-item">
            <h3 className="item-title">AI & Data Science Mentor</h3>
            <p className="item-subtitle">Skilvul</p>
            <p className="item-date">Feb 2024 - Jun 2024</p>
          </div>
          <div className="list-item">
            <h3 className="item-title">AI Developer</h3>
            <p className="item-subtitle">PT Indonesia Indicator</p>
            <p className="item-date">Aug 2021 - Nov 2023</p>
          </div>
        </div>

        <div className="section-block">
          <h2 className="section-title">patents</h2>
          <div className="list-item">
            <h3 className="item-title" style={{lineHeight: 1.3, marginBottom: '0.4rem'}}>Kombinasi Jaringan Saraf Tiruan dan Particle Swarm Optimization Prediksi Jumlah Produksi Air PDAM</h3>
            <p className="item-subtitle">ID EC00202124246</p>
            <p className="item-date">20 Mei 2021</p>
          </div>

          <button className="download-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C16 2 19 5.58172 19 10V22L16 20L13 22L10 20L7 22V10C7 5.58172 10 2 12 2Z"></path>
              <circle cx="10" cy="9" r="1"></circle>
              <circle cx="14" cy="9" r="1"></circle>
            </svg>
            Release
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutAndExperience;
