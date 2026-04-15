import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: light)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <header className="site-header">
      <div className="header-left">
        <a href="/" className="logo">Arif.</a>
      </div>
      <div className="header-center">
        <nav>
          <a href="https://github.com/agustyawan-arif" target="_blank" rel="noreferrer">github</a>
          <a href="https://www.linkedin.com/in/arifagustyawan/" target="_blank" rel="noreferrer">linkedin</a>
          <a href="#">resume</a>
        </nav>
      </div>
      <div className="header-right" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="mailto:hello@arifagustyawan.com" className="email-link">hello@arifagustyawan.com</a>
        <button 
           onClick={() => setIsLightMode(!isLightMode)}
           style={{ 
             background: 'transparent', 
             border: 'none', 
             color: 'var(--text-main)', 
             cursor: 'pointer',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             padding: '0 0.5rem',
             opacity: 0.8,
             transition: 'opacity 0.2s ease'
           }}
           onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
           onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
           aria-label="Toggle Theme"
        >
          {isLightMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
