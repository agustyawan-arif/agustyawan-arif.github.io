import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import './CommandPalette.css';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  return (
    <div className="cmdk-backdrop" onClick={() => setOpen(false)}>
      <div className="cmdk-modal" onClick={(e) => e.stopPropagation()}>
        <Command>
          <div className="cmdk-search-wrapper">
            <svg className="cmdk-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <Command.Input placeholder="Type a command or search..." autoFocus />
            <button className="cmdk-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="NAVIGATION">
              <Command.Item onSelect={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                Go to Home
                <span className="cmdk-shortcut">↵</span>
              </Command.Item>
              <Command.Item onSelect={() => { document.querySelector('.about-experience-section')?.scrollIntoView({behavior: 'smooth'}); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Go to About
              </Command.Item>
              <Command.Item onSelect={() => { document.querySelector('.experience-right')?.scrollIntoView({behavior: 'smooth'}); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                View Experience
              </Command.Item>
              <Command.Item onSelect={() => { document.querySelector('.selected-works-section')?.scrollIntoView({behavior: 'smooth'}); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Browse Projects
              </Command.Item>
            </Command.Group>

            <Command.Group heading="SOCIAL">
              <Command.Item onSelect={() => { window.open('mailto:hello@arifagustyawan.com'); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Send Email
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://github.com/agustyawan-arif'); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Open GitHub
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://www.linkedin.com/in/arifagustyawan/'); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                Open LinkedIn
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="ACTIONS">
              <Command.Item onSelect={() => { alert('Downloading resume...'); setOpen(false); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Resume
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="cmdk-footer">
            <span className="cmdk-footer-left">Navigate with ↑↓ arrows</span>
            <span className="cmdk-footer-right">Press ESC to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
};

export default CommandPalette;
