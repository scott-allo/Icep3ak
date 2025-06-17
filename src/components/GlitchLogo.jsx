import React, { useEffect, useRef } from 'react';
import '../styles/GlitchLogo.scss';

const GlitchLogo = () => {
  const logoRef = useRef(null);
  
  useEffect(() => {
    const logo = logoRef.current;
    let animationFrame;
    let lastTime = 0;
    
    const glitchEffect = (currentTime) => {
      if (currentTime - lastTime > 3000) { // Glitch every 3 seconds
        const glitchDuration = 500; // Duration of glitch effect
        const startTime = currentTime;
        
        const applyGlitch = (now) => {
          const elapsed = now - startTime;
          
          if (elapsed < glitchDuration) {
            const intensity = Math.random() * 20 - 10;
            const color = Math.random() > 0.5 ? '#0ff' : '#f0f';
            
            logo.style.transform = `translate(${intensity}px, ${intensity}px)`;
            logo.style.textShadow = `
              ${intensity}px ${intensity}px 0 ${color},
              ${-intensity}px ${-intensity}px 0 #fff
            `;
            
            animationFrame = requestAnimationFrame(applyGlitch);
          } else {
            logo.style.transform = 'none';
            logo.style.textShadow = 'none';
            lastTime = currentTime;
          }
        };
        
        animationFrame = requestAnimationFrame(applyGlitch);
      }
      
      animationFrame = requestAnimationFrame(glitchEffect);
    };
    
    animationFrame = requestAnimationFrame(glitchEffect);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="logo-container">
      <h1 ref={logoRef} className="glitch-logo" data-text="IC3PEAK">
        IC3PEAK
      </h1>
    </div>
  );
};

export default GlitchLogo; 