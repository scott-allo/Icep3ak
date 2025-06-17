import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ enabled }) => {
  const [audio] = useState(new Audio('/assets/audio/background.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (enabled) {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Erreur lors de la lecture audio:', error);
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [enabled, audio]);

  return null; // Ce composant ne rend rien visuellement
};

export default AudioPlayer; 