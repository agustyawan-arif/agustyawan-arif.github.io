import React from 'react';
import './TechStackPills.css';

const allPillsData = [
  { name: 'Python', icon: 'P' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Transformers', icon: 'T' },
  { name: 'NLP', icon: '🗣' },
  { name: 'Computer Vision', icon: '👁' },
  { name: 'YOLOv8', icon: 'Y' },
  { name: 'WandB', icon: 'W' },
  { name: 'Data Analysis', icon: '📊' },
  { name: 'Time Series', icon: '📈' },
  { name: 'Forecasting', icon: '🔮' },
  { name: 'Streamlit', icon: 'S' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Deep Learning', icon: '🧠' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'React.js', icon: '⚛' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'SQL', icon: '💽' }
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
