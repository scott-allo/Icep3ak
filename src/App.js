import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import NoiseOverlay from './components/NoiseOverlay';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    // Effet de curseur personnalisé
    document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'><circle cx=\'8\' cy=\'8\' r=\'7\' fill=\'none\' stroke=\'white\' stroke-width=\'1\'/></svg>") 8 8, auto';
  }, []);

  return (
    <div className="app">
      <NoiseOverlay />
      <AudioPlayer enabled={audioEnabled} />
      
      <Routes>
        <Route path="/" element={<Home enableAudio={() => setAudioEnabled(true)} />} />
        <Route path="/music" element={<Music />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App; 