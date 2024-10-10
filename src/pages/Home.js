import React from 'react';
import Navbar from '../components/Navbar';
import Us from '../pages/us.js';
import AA from '../pages/AA.js';
import './Home.css';
import Testimonials from '../components/Testimonials.js';
import TimeModule from '../components/TimeModule';
import WeatherModule from '../components/WeatherModule';
import YouTubeVideo from '../components/YouTubeVideo';
import StaffList from '../components/StaffList';


function Home() {
    return (
        <div className='app-container'>
        <div className="home-container">
            
            
            
            <Us />
           
            <h2>Featured Projects</h2>
            <div className="video-gridl">
        
        <YouTubeVideo videoId="Oo29r0_w8_c" />
        <YouTubeVideo videoId="3OE7SPE1Qno" />
        <YouTubeVideo videoId="rQROvtEorsY" />
        
      </div>
            <AA />
            <h2>Our Team</h2>
            <StaffList/>
            <Testimonials/>
            <TimeModule />
            <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
        </div>
        </div>
    );
}

export default Home;
