import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlitchText from '../components/GlitchText';
import DistortionEffect from '../components/DistortionEffect';

export default function Home({ enableAudio }) {
  const linksRef = useRef([]);

  useEffect(() => {
    // Animation d'entrée
    gsap.from(linksRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "back.out"
    });

    // Effets aléatoires de glitch
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomLink = linksRef.current[Math.floor(Math.random() * linksRef.current.length)];
        gsap.to(randomLink, {
          duration: 0.1,
          x: (Math.random() - 0.5) * 20,
          y: (Math.random() - 0.5) * 20,
          color: ['#0ff', '#f0f', '#fff'][Math.floor(Math.random() * 3)],
          onComplete: () => {
            gsap.to(randomLink, { duration: 0.3, x: 0, y: 0, color: '#fff' });
          }
        });
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="home-page" onClick={enableAudio}>
      <DistortionEffect intensity={0.5} />
      
      <div className="main-content">
        <GlitchText text="IC3PEAK" fontSize="6rem" className="main-title" />
        
        <div className="links-container">
          {['MUSIC', 'VIDEOS', 'TOUR', 'STORE'].map((link, i) => (
            <div 
              key={link}
              ref={el => linksRef.current[i] = el}
              className="glitch-link"
              onMouseEnter={() => {
                gsap.to(linksRef.current[i], { 
                  color: '#0ff', 
                  duration: 0.3,
                  textShadow: '0 0 10px #0ff'
                });
              }}
              onMouseLeave={() => {
                gsap.to(linksRef.current[i], { 
                  color: '#fff', 
                  duration: 0.3,
                  textShadow: 'none'
                });
              }}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
      
      <div className="footer">
        {['INSTAGRAM', 'TELEGRAM', 'YOUTUBE', 'CONTACT'].map(link => (
          <a 
            key={link} 
            href="#" 
            className="footer-link"
            onMouseEnter={(e) => {
              gsap.to(e.target, { 
                color: '#f0f',
                duration: 0.2 
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.target, { 
                color: '#fff',
                duration: 0.5 
              });
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
} 