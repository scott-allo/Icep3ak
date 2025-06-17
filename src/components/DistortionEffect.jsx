import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DistortionEffect = ({ intensity = 0.5 }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      const { width, height } = canvas;
      const imageData = context.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * intensity * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 20;    // A
      }

      context.putImageData(imageData, 0, 0);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.05,
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default DistortionEffect; 