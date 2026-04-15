import React from 'react';
import './FloatingElements.css';

export const FloatingButton = () => {
  return (
    <button className="floating-button" aria-label="Toggle Theme">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C16 2 19 5.58172 19 10V22L16 20L13 22L10 20L7 22V10C7 5.58172 10 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="10" cy="9" r="1" fill="currentColor"/>
        <circle cx="14" cy="9" r="1" fill="currentColor"/>
      </svg>
    </button>
  );
};

export const FooterHint = () => {
  return (
    <div className="footer-hint">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <span>Press ⌘K</span>
    </div>
  );
};
