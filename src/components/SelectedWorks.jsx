import React, { useState, useEffect, useRef } from 'react';
import './SelectedWorks.css';


export const projectsData = [
  {
    title: 'Indonesian Sentiment RoBERTa',
    slug: 'sentiment-roberta-id',
    aiDomain: 'NLP',
    businessDomain: 'Customer Experience',
    projectType: 'Personal Project',
    role: 'Machine Learning Engineer',
    description: 'Fine-tuned a RoBERTa-base model specifically for Indonesian dialect nuances, addressing the performance gap in regional sentiment detection and localized social media analytics.',
    techStacks: ['Python', 'PyTorch', 'Transformers', 'HuggingFace'],
    image: 'https://picsum.photos/seed/nlp/800/450',
    keyResults: [
      '95.2% F1-score on SmSA dataset, outperforming M-BERT baseline by 6.5%',
      'Optimized inference container reducing memory footprint by 40%',
      'Handled 10k+ test samples with zero classification timeouts'
    ],
    highlights: [
      'Custom preprocessing for Indonesian slang and code-switching',
      'Implemented mixed-precision training (FP16) to accelerate fine-tuning by 2x',
      'Solved class imbalance issues using Weighted Cross-Entropy loss'
    ]
  },
  {
    title: 'Streamlit User Interface Kit',
    slug: 'st-user-info-panel',
    aiDomain: 'UI/UX Engineering',
    businessDomain: 'Developer Productivity',
    projectType: 'Personal Project',
    role: 'Full Stack Engineer',
    description: 'Developed a high-performance, responsive UI component for Streamlit applications to bridge the gap between Python scripts and polished SaaS interfaces.',
    techStacks: ['TypeScript', 'React.js', 'Python', 'Streamlit'],
    image: 'https://picsum.photos/seed/ui/800/450',
    keyResults: [
      '1,000+ PyPI downloads with active developer adoption',
      'Zero reported layout breaking issues across major browsers',
      'Successfully integrated into 5+ production-grade internal tools'
    ],
    highlights: [
      'Optimized React-Streamlit bridge for low-latency state synchronization',
      'Abstracted complex DOM manipulations into a clean Pythonic API',
      'Implemented dynamic theming that respects Streamlit native settings'
    ]
  },
  {
    title: 'Retail Intelligence & Forecasting',
    slug: 'retail-sales',
    aiDomain: 'Predictive Analytics',
    businessDomain: 'Retail & E-commerce',
    projectType: 'Professional Project',
    role: 'Data Analyst',
    description: 'Engineered an end-to-end data pipeline to transform raw retail streams into actionable forecasting models for inventory optimization and sales growth.',
    techStacks: ['Python', 'Pandas', 'SQL', 'Time Series'],
    image: 'https://picsum.photos/seed/data/800/450',
    keyResults: [
      'Achieved 92% forecasting accuracy for high-variance peak seasons',
      'Identified $50k+ in potential savings via inventory gap analysis',
      'Reduced monthly reporting time from 3 days to automated real-time'
    ],
    highlights: [
      'Architected robust ETL pipelines for 10M+ transaction records',
      'Developed automated anomaly detection for sales outlier handling',
      'Built interactive Plotly dashboards for executive decision making'
    ]
  },
  {
    title: 'Real-time Vehicle Perception',
    slug: 'yolov8-car-object-detection',
    aiDomain: 'Computer Vision',
    businessDomain: 'Automotive & Logistics',
    projectType: 'Personal Project',
    role: 'Computer Vision Engineer',
    description: 'Trained and optimized object detection models for autonomous vehicle perception in high-density urban environments with a focus on real-time performance.',
    techStacks: ['Python', 'YOLOv8', 'OpenCV', 'WandB'],
    image: 'https://picsum.photos/seed/vision/800/450',
    keyResults: [
      'Maintained 60 FPS inference speed on consumer-grade hardware',
      '0.94 mAP metric achieved across diverse weather/lighting conditions',
      'Reduced false-positive rate by 15% in night-mode scenarios'
    ],
    highlights: [
      'Fine-tuned using Transfer Learning on specialized urban datasets',
      'Integrated WandB for systematic hyperparameter searches',
      'Implemented TTA (Test-Time Augmentation) for increased robustness'
    ]
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-scroll-area">
          <div className="modal-header">
            <div className="modal-meta-row">
              <span className="modal-meta-item">{project.projectType}</span>
              <span className="modal-meta-sep">•</span>
              <span className="modal-meta-item">{project.aiDomain}</span>
              <span className="modal-meta-sep">•</span>
              <span className="modal-meta-item">{project.businessDomain}</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          <div className="modal-body">
            <div className="modal-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="modal-main-grid">
              <div className="modal-content-left">
                <section className="modal-section">
                  <h3 className="modal-section-title">Overview</h3>
                  <p className="modal-description">{project.description}</p>
                </section>
                
                <section className="modal-section">
                  <h3 className="modal-section-title">Core Technologies</h3>
                  <div className="modal-tech-tags">
                    {project.techStacks.map((tech, i) => (
                      <span key={i} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </section>
              </div>

              <div className="modal-content-right">
                <section className="modal-section">
                  <h3 className="modal-section-title">Key Results</h3>
                  <ul className="modal-results-list">
                    {project.keyResults.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </section>

                <section className="modal-section">
                  <h3 className="modal-section-title">Technical Highlights</h3>
                  <ul className="modal-results-list">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedWorks = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index'), 10);
        if (entry.isIntersecting) {
          setVisibleIndices(prev => prev.includes(index) ? prev : [...prev, index]);
          setActiveProject(index);
        } else {
          // Remove from visible to allow re-triggering animation when scrolling back
          setVisibleIndices(prev => prev.filter(i => i !== index));
        }
      });
    }, {
      root: null,
      rootMargin: '-5% 0px -15% 0px',
      threshold: 0.05
    });

    if (containerRef.current) {
      const blocks = containerRef.current.querySelectorAll('.project-block');
      blocks.forEach((block) => observer.observe(block));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="selected-works-section">
      <div className="works-full-width">
        <h2 className="section-main-title">Selected Works</h2>
        
        <div className="project-container" ref={containerRef}>
          {projectsData.map((proj, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div 
                key={idx} 
                data-index={idx}
                className={`project-block ${activeProject === idx ? 'active' : ''} ${visibleIndices.includes(idx) ? 'in-view' : ''} ${isReversed ? 'reversed' : ''}`}
              >
                <div className="project-grid">
                  {/* LEFT SIDE (Visuals) */}
                  <div className="project-col-left">
                    <div className="project-image-wrapper staggered-item">
                      <div className="blur-bg-container">
                        <img src={proj.image} alt="" className="blur-bg-img" />
                      </div>
                      <div className="main-img-container">
                         <img src={proj.image} alt={proj.title} className="zoom-img" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE (Information) */}
                  <div className="project-col-right">
                    <h3 className="project-title staggered-item">{proj.title}</h3>
                    
                    <div className="project-meta-bar staggered-item">
                      <div className="meta-compact">
                        <span className="meta-tag">{proj.projectType}</span>
                        <span className="meta-dot"></span>
                        <span className="meta-tag">{proj.aiDomain}</span>
                        <span className="meta-dot"></span>
                        <span className="meta-tag">{proj.businessDomain}</span>
                      </div>
                    </div>

                    <p className="project-short-desc staggered-item">{proj.description}</p>
                    
                    <div className="project-bottom-row staggered-item">
                      <div className="project-tech-tags">
                        {proj.techStacks.slice(0, 3).map((tech, i) => (
                          <span key={i} className={`tech-tag ${i === 0 ? 'highlight' : ''}`}>
                            {tech}
                          </span>
                        ))}
                        {proj.techStacks.length > 3 && <span className="tech-tag-more">+{proj.techStacks.length - 3}</span>}
                      </div>

                      <button 
                        className="case-study-btn"
                        onClick={() => setSelectedProject(proj)}
                      >
                        <span>Explore Detail</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H5.5M11.3536 3.64645V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="show-all-container fade-in">
          <button className="show-all-btn">
             <span>View Full Project Archive</span>
             <div className="btn-line"></div>
          </button>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default SelectedWorks;
