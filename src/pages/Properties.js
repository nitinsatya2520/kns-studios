// Properties.js
import React from 'react';
import './Properties.css';
import YouTubeVideo from '../components/YouTubeVideo';
import Navbar from '../components/Navbar';

const Properties = () => {
  return (
    <div className='app-container'><Navbar/>
    <section className="properties-container">
      <h2>Our Projects</h2>
      <div className="video-grid">
        
        <YouTubeVideo videoId="Oo29r0_w8_c" />
        <YouTubeVideo videoId="3OE7SPE1Qno" />
        <YouTubeVideo videoId="rQROvtEorsY" />
        
      </div>
    </section>
    </div>
  );
};

export default Properties;
