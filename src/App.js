import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Terminal from './components/Terminal';
import GlitchLogo from './components/GlitchLogo';
import NoiseOverlay from './components/NoiseOverlay';
import AudioPlayer from './components/AudioPlayer';
import CustomCursor from './components/CustomCursor';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
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