import React, { useState, useEffect, useRef } from 'react';
import './SelectedWorks.css';


export const projectsData = [
  {
    title: 'Optimizing YOLOv8 Training on Apple Silicon (MPS Acceleration)',
    slug: 'yolov8-optimization-apple-silicon',
    aiDomain: 'Computer Vision (Object Detection)',
    businessDomain: 'Visual Recognition / Edge AI',
    projectType: 'Personal Project',
    role: 'AI Engineer',
    description: 'Developed a computer vision pipeline for object detection using YOLOv8, with a focus on enabling training and evaluation on Apple Silicon devices via Metal Performance Shaders (MPS). The project explores running deep learning workloads without CUDA, leveraging Apple’s GPU acceleration stack. The system includes training, evaluation, and experiment tracking, demonstrating how modern object detection models can be adapted for non-NVIDIA environments.',
    techStacks: ['Python', 'PyTorch', 'YOLOv8', 'Weights & Biases', 'MPS'],
    image: '/yolov8_apple_silicon_optimization.png',
    keyResults: [
      'Successfully trained YOLOv8 model on Apple Silicon using MPS backend (no CUDA)',
      'Built end-to-end object detection pipeline (training → evaluation → visualization)',
      'Integrated experiment tracking using Weights & Biases (W&B)',
      'Demonstrated feasibility of running CV workloads on non-CUDA hardware environments'
    ],
    highlights: [
      'Adapted YOLOv8 training workflow to run on Apple Silicon GPU (MPS)',
      'Explored alternative hardware acceleration beyond CUDA',
      'Built configurable training pipeline with dataset integration and evaluation scripts',
      'Implemented prediction visualization for model evaluation',
      'Integrated W&B for experiment tracking and reproducibility'
    ]
  },
  {
    title: 'Indonesian Sentiment Analysis with RoBERTa Fine-Tuning',
    slug: 'indonesian-sentiment-analysis-roberta',
    aiDomain: 'Natural Language Processing',
    businessDomain: 'Social Media Analytics',
    projectType: 'Personal Project',
    role: 'AI Engineer',
    description: 'Built a sentiment analysis model for Indonesian text using a fine-tuned RoBERTa architecture trained on the IndoNLU SmSA dataset. The model is designed to handle diverse and noisy real-world inputs such as informal language, slang, and short text messages. The trained model is deployed on Hugging Face for public use, enabling easy integration into downstream applications like social media monitoring and customer feedback analysis.',
    techStacks: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'IndoNLU'],
    image: 'https://raw.githubusercontent.com/agustyawan-arif/sentiment-roberta-id/main/assets/spaces_simulation.gif',
    keyResults: [
      'Published model on Hugging Face with 1,443+ total downloads',
      'Achieved strong performance on Indonesian sentiment classification tasks using IndoNLU benchmark dataset',
      'Enabled real-time sentiment inference via lightweight inference script',
      'Demonstrated robustness on informal and noisy Indonesian text inputs'
    ],
    highlights: [
      'Fine-tuned RoBERTa model specifically for Indonesian language sentiment classification',
      'Built end-to-end pipeline: training, evaluation, and inference',
      'Designed configurable training setup (hyperparameters, output control)',
      'Implemented interactive inference script for real-time predictions',
      'Structured project for reproducibility and easy experimentation'
    ]
  },
  {
    title: 'Indonesian Speech Recognition with Wav2Vec2 XLSR Fine-Tuning',
    slug: 'indonesian-speech-recognition-wav2vec2',
    aiDomain: 'Speech Recognition (ASR)',
    businessDomain: 'Speech-to-Text',
    projectType: 'Personal Project',
    role: 'AI Engineer',
    description: 'Developed an automatic speech recognition (ASR) model for Indonesian by fine-tuning the Wav2Vec2 XLSR architecture on the Common Voice dataset. The model converts raw audio into text and is designed to handle diverse speech inputs across accents and speaking styles. The model is publicly available on Hugging Face, enabling integration into real-world applications such as transcription systems and voice-based interfaces.',
    techStacks: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Wav2Vec2'],
    image: '/speech_recognition_visualization.png',
    keyResults: [
      'Published ASR model on Hugging Face with 1,081+ total downloads',
      'Achieved WER of 0.4316 on Common Voice Indonesian evaluation set',
      'Successfully reduced WER from 1.0 → 0.43 during training',
      'Delivered end-to-end speech-to-text inference pipeline for Indonesian audio'
    ],
    highlights: [
      'Fine-tuned multilingual Wav2Vec2 XLSR-53 model for Indonesian ASR',
      'Built full pipeline: audio preprocessing → feature extraction → model training → inference',
      'Handled raw waveform input and optimized training with mixed precision (AMP)',
      'Tuned training configuration (learning rate, batch strategy, scheduler) for stable convergence',
      'Deployed model for public access and downstream integration via Hugging Face'
    ]
  },
  {
    title: 'Next Product Recommendation System for E-commerce',
    slug: 'next-product-recommendation-ecommerce',
    aiDomain: 'Recommender System',
    businessDomain: 'E-commerce',
    projectType: 'Personal Project',
    role: 'AI Engineer',
    description: 'Developed a recommendation system to predict the next product a user is likely to purchase based on historical transaction patterns. The system leverages user behavior data to generate personalized product suggestions, helping improve user engagement and conversion. Designed as an end-to-end machine learning workflow, the project covers data preprocessing, feature engineering, model training, and recommendation generation.',
    techStacks: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Jupyter'],
    image: 'https://raw.githubusercontent.com/agustyawan-arif/next-product-to-buy/main/assets/simulation_preview.gif',
    keyResults: [
      'Built a personalized recommendation pipeline based on user purchase behavior',
      'Enabled next-item prediction to support targeted product recommendations',
      'Improved relevance of suggested products through behavioral pattern modeling',
      'Structured system for extensibility to real-world e-commerce use cases'
    ],
    highlights: [
      'Designed recommendation logic based on sequential / transactional user data',
      'Performed feature engineering on user-item interaction patterns',
      'Explored recommendation approaches (e.g., collaborative or pattern-based methods)',
      'Built modular pipeline for training and inference',
      'Focused on real-world applicability in e-commerce recommendation scenarios'
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
