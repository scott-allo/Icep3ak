import React from 'react';
import GlitchText from '../components/GlitchText';

const Home = () => {
  return (
    <div className="container">
      <GlitchText text="IC3PEAK" />
      <nav className="nav">
        <ul className="nav__list">
          <li><a href="/music" className="nav__link">Musique</a></li>
          <li><a href="/videos" className="nav__link">Vidéos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home; 