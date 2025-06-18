import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Terminal from './components/Terminal';
import GlitchLogo from './components/GlitchLogo';
import NoiseOverlay from './components/NoiseOverlay';
import AudioPlayer from './components/AudioPlayer';
import CustomCursor from './components/CustomCursor';
import VideoOverlay from './VideoOverlay';
import '../src/styles/main.scss';

function App() {
  const [glitchMode, setGlitchMode] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);

  return (
    <div className={`app${glitchMode ? ' glitch-mode' : ''}`}>
      <div className="noise-bg" />
      <CustomCursor />
      <GlitchLogo />
      <Navigation />
      <NoiseOverlay />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Terminal />
      <AudioPlayer />
      <VideoOverlay show={showVideoOverlay} onClose={() => setShowVideoOverlay(false)} />
      <button
        className={`wings-toggle${glitchMode ? ' active' : ''}`}
        onClick={() => setShowVideoOverlay(true)}
        aria-pressed={glitchMode}
        title={glitchMode ? 'Désactiver Glitch Mode' : 'Activer Glitch Mode'}
      >
        <span className="wing left">{'<'}</span>
        <span style={{ width: '24px', display: 'inline-block' }}></span>
        <span className="wing right">{'>'}</span>
      </button>
    </div>
  );
}

const Home = () => (
  <div className="home-container">
    <div className="glitch-text">
      WELCOME TO THE VOID
    </div>
    <div className="cyber-grid"></div>
  </div>
);

const Music = () => (
  <div className="music-container">
    <h2 className="section-title">MUSIC</h2>
    {/* Add your music content here */}
  </div>
);

const Videos = () => (
  <div className="videos-container">
    <h2 className="section-title">VIDEOS</h2>
    {/* Add your videos content here */}
  </div>
);

export default App; 