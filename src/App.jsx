import React from 'react';
import Header from './components/Header';
import { FloatingButton, FooterHint } from './components/FloatingElements';
import Hero from './components/Hero';
import AboutAndExperience from './components/AboutAndExperience';
import SelectedWorks from './components/SelectedWorks';
import CommandPalette from './components/CommandPalette';
import { useScrollFade } from './hooks/useScrollFade';
import './App.css';

const App = () => {
  useScrollFade();
  
  return (
    <div className="portfolio-app">
      <CommandPalette />
      <Header />
      <FloatingButton />
      
      <main className="main-content">
        <Hero />
        <AboutAndExperience />
        <SelectedWorks />
      </main>

      <FooterHint />
    </div>
  );
};

export default App;
