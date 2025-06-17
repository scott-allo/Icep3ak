import React from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';

const Home = ({ enableAudio }) => {
  return (
    <div className="container">
      <GlitchText text="IC3PEAK" />
      <nav className="nav">
        <ul className="nav__list">
          <li><Link to="/music" className="nav__link" onClick={enableAudio}>Musique</Link></li>
          <li><Link to="/videos" className="nav__link" onClick={enableAudio}>Vidéos</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home; 