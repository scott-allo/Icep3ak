import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GlitchText({ text, fontSize = '2rem', className = '' }) {
  const textRef = useRef();
  const clonesRef = useRef([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        // Animation de glitch
        gsap.to(clonesRef.current, {
          duration: 0.05,
          x: () => (Math.random() - 0.5) * 20,
          y: () => (Math.random() - 0.5) * 10,
          opacity: () => Math.random() * 0.7,
          stagger: {
            each: 0.05,
            from: 'random'
          },
          onComplete: () => {
            gsap.to(clonesRef.current, {
              duration: 0.3,
              x: 0,
              y: 0,
              opacity: 0
            });
          }
        });
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`glitch-text-container ${className}`} style={{ fontSize }}>
      <div ref={textRef} className="glitch-text-original">{text}</div>
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          ref={el => clonesRef.current[i] = el}
          className="glitch-text-clone"
          style={{ 
            color: i === 0 ? '#0ff' : i === 1 ? '#f0f' : '#fff',
            zIndex: -1 - i
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
} 