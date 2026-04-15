import React, { useRef, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import './FloatingElements.css';

export const InteractiveGhost = () => {
  const { x, y, isHovering } = useMousePosition();
  const ghostRef = useRef(null);
  
  // Use requestAnimationFrame for smooth movement if needed, 
  // but for now simple CSS transition on transform will work if tuned.
  // Actually, let's use a delayed position for that "smooth" feel.
  const delayedPos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const animate = () => {
      const dx = x - delayedPos.current.x;
      const dy = y - delayedPos.current.y;
      
      delayedPos.current.x += dx * 0.15;
      delayedPos.current.y += dy * 0.15;
      
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translate3d(${delayedPos.current.x}px, ${delayedPos.current.y}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [x, y]);

  return (
    <div 
      ref={ghostRef}
      className={`interactive-ghost-container`}
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, transition: 'transform 0.1s linear' }}
      aria-hidden="true"
    >
      <div className={`ghost-scaler ${isHovering ? 'scaled' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central AI Node Dot */}
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          {/* Abstract Technical Ring */}
          <path 
            d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11 21.8 10.1 21.5 9.2" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
          <path 
            d="M12 5V2M12 22V19M2 12H5M22 12H19" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </div>
  );
};

export const FloatingButton = () => {
  // Keeping this for now but it's likely replaced by the ghost
  return null; 
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
