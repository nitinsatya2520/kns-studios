// Properties.js
import React from 'react';
import './Properties.css';
import YouTubeVideo from '../components/YouTubeVideo';

const Properties = () => {
  return (
    <section className="properties-container">
      <h2>Our Projects</h2>
      <div className="video-grid">
        <YouTubeVideo videoId="3OE7SPE1Qno" />
        <YouTubeVideo videoId="rQROvtEorsY" />
      </div>
    </section>
  );
};

export default Properties;
