import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer section-block">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-cta">
            <h2 className="footer-title">Let's build something <br/><span>extraordinary</span> together.</h2>
            <a href="mailto:arifagustyawan@gmail.com" className="footer-email">arifagustyawan@gmail.com</a>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <span className="link-label">Connect</span>
              <a href="https://www.linkedin.com/in/arifagustyawan/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/agustyawan-arif" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://huggingface.co/arifagustyawan" target="_blank" rel="noreferrer" className="footer-link">HuggingFace</a>
              <a href="https://www.kaggle.com/arifagustyawan" target="_blank" rel="noreferrer" className="footer-link">Kaggle</a>
            </div>
            <div className="link-group">
              <span className="link-label">Navigation</span>
              <a href="#hero" className="footer-link">Back to top</a>
              <a href="#" className="footer-link">Archive</a>
              <a href="#" className="footer-link">Notes</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Arif Agustyawan. All rights reserved.</p>
          <div className="footer-quote">
             <span>Inspired by excellence</span>
             <div className="quote-dot"></div>
             <span>Built with purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
