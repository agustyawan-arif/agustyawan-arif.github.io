import React, { useState, useEffect, useRef } from 'react';
import './SelectedWorks.css';
import TechStackPills from './TechStackPills';

export const projectsData = [
  {
    name: 'sentiment-roberta-id',
    type: 'NLP Model',
    year: '2023',
    roleLabel: 'DATA SCIENTIST',
    myRole: 'Model Developer',
    description: 'Training and inference a sentiment analysis model using RoBERTa base model. The sentiment analysis is performed on an SmSA dataset obtained from the IndoNLU datasets.',
    techStacks: ['Python', 'NLP', 'Transformers', 'Deep Learning', 'Machine Learning'],
    image: 'https://picsum.photos/seed/nlp/800/450'
  },
  {
    name: 'st-user-info-panel',
    type: 'Streamlit Component',
    year: '2023',
    roleLabel: 'FRONTEND, UI',
    myRole: 'Open Source Contributor',
    description: 'Streamlit component for a floating User Info panel anchored to the sidebar. Supports fixed float stick in sidebar, a collapsed avatar chip when the sidebar is hidden.',
    techStacks: ['Python', 'Streamlit', 'JavaScript', 'React.js'],
    image: 'https://picsum.photos/seed/ui/800/450'
  },
  {
    name: 'retail-sales',
    type: 'Data Analysis & BI',
    year: '2022',
    roleLabel: 'DATA ANALYST',
    myRole: 'Analyst',
    description: 'Exploratory Data Analysis, Time Series Data Analysis, Forecasting, and Data Visualization Dashboarding for massive scale Retail Sales Data streams.',
    techStacks: ['Python', 'Pandas', 'Data Analysis', 'Time Series', 'Forecasting', 'SQL'],
    image: 'https://picsum.photos/seed/data/800/450'
  },
  {
    name: 'yolov8-car-object-detection',
    type: 'Computer Vision',
    year: '2023',
    roleLabel: 'MACHINE LEARNING',
    myRole: 'AI Engineer',
    description: 'Training and evaluating YOLOv8 models on a car-object detection dataset. The project is built using the Ultralytics YOLOv8 library and integrates with WandB for experiment tracking.',
    techStacks: ['Python', 'Computer Vision', 'YOLOv8', 'Deep Learning', 'WandB'],
    image: 'https://picsum.photos/seed/vision/800/450'
  }
];

const SelectedWorks = () => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setActiveProject(index);
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    });

    if (containerRef.current) {
      const blocks = containerRef.current.querySelectorAll('.project-block');
      blocks.forEach((block) => observer.observe(block));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="selected-works-section fade-in">
      <div className="works-left fade-in delay-1">
        <h2 className="section-main-title">Selected Works</h2>
        
        <div className="project-container" ref={containerRef}>
          {projectsData.map((proj, idx) => (
            <div 
              key={idx} 
              data-index={idx}
              className="project-block"
              onMouseEnter={() => setActiveProject(idx)}
              style={{ 
                marginBottom: '8rem', 
                opacity: activeProject === idx ? 1 : 0.3,
                transition: 'opacity 0.4s ease',
                cursor: 'pointer'
              }}
            >
              <div className="project-header">
                <h3 className="project-name">{proj.name}</h3>
                <span className="project-type">{proj.type}</span>
              </div>
              
              <div className="project-image-wrapper">
                <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div className="project-meta">
                <div className="meta-left-col">
                  <div className="meta-item">
                    <span className="meta-label">EVENT / YEAR</span>
                    <span className="meta-value">{proj.year}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">ROLE</span>
                    <span className="meta-value">{proj.roleLabel}</span>
                  </div>
                </div>
                
                <div className="meta-desc">
                  <span className="meta-label">MY ROLE</span>
                  <p className="meta-value">
                    {proj.myRole} <br/><br/>
                    {proj.description}
                  </p>
                </div>
                
                <div className="meta-action">
                   <button className="next-btn">→</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="works-right fade-in delay-2">
         <TechStackPills activeStacks={projectsData[activeProject].techStacks} />
      </div>
    </section>
  );
};

export default SelectedWorks;
