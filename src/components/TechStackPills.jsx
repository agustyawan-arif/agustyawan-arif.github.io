import React from 'react';
import './TechStackPills.css';

const Icons = {
  Python: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  PyTorch: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 22h20L12 2z"/><path d="M12 18v-4"/>
    </svg>
  ),
  Transformers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
  ),
  NLP: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>
    </svg>
  ),
  CV: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  YOLO: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
    </svg>
  ),
  WandB: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M18 9l-5 5-2-2-4 4"/>
    </svg>
  ),
  Data: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
    </svg>
  ),
  TimeSeries: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M7 12h3v4H7zM12 8h3v8h-3zM17 14h3v2h-3z"/>
    </svg>
  ),
  Forecast: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>
    </svg>
  ),
  Streamlit: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  Pandas: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M9 10l3 3 3-3"/>
    </svg>
  ),
  DL: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>
    </svg>
  ),
  ML: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 6h6M9 18h6M15 12l-6-6M15 12l-6 6"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/><path d="M12 5c5 0 9 3 9 7s-4 7-9 7-9-3-9-7 4-7 9-7z"/><path d="M12 5c-5 0-9 3-9 7s4 7 9 7 9-3 9-7-4-7-9-7z" transform="rotate(60 12 12)"/><path d="M12 5c-5 0-9 3-9 7s4 7 9 7 9-3 9-7-4-7-9-7z" transform="rotate(120 12 12)"/>
    </svg>
  ),
  JS: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 15l2 2 4-4M17 9v6"/>
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  )
};

const allPillsData = [
  { name: 'Python', icon: <Icons.Python /> },
  { name: 'PyTorch', icon: <Icons.PyTorch /> },
  { name: 'Transformers', icon: <Icons.Transformers /> },
  { name: 'NLP', icon: <Icons.NLP /> },
  { name: 'Computer Vision', icon: <Icons.CV /> },
  { name: 'YOLOv8', icon: <Icons.YOLO /> },
  { name: 'WandB', icon: <Icons.WandB /> },
  { name: 'Data Analysis', icon: <Icons.Data /> },
  { name: 'Time Series', icon: <Icons.TimeSeries /> },
  { name: 'Forecasting', icon: <Icons.Forecast /> },
  { name: 'Streamlit', icon: <Icons.Streamlit /> },
  { name: 'Pandas', icon: <Icons.Pandas /> },
  { name: 'Deep Learning', icon: <Icons.DL /> },
  { name: 'Machine Learning', icon: <Icons.ML /> },
  { name: 'React.js', icon: <Icons.React /> },
  { name: 'JavaScript', icon: <Icons.JS /> },
  { name: 'SQL', icon: <Icons.SQL /> }
];

const TechStackPills = ({ activeStacks = [] }) => {
  return (
    <div className="tech-stack-container" style={{ position: 'sticky', top: '10rem' }}>
      <h2 className="tech-title">Tech Stacks</h2>
      <div className="pills-grid">
        {allPillsData.map((pill, idx) => {
          const isActive = activeStacks.includes(pill.name);
          return (
            <div 
              key={idx} 
              className={`tech-pill ${isActive ? 'light' : 'dark'}`}
              style={{
                transition: 'all 0.4s ease'
              }}
            >
              <span className="pill-icon">{pill.icon}</span>
              <span className="pill-name">{pill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackPills;
