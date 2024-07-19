import React, { useEffect } from 'react';
import nitin from '../assets/images/KNS STUDIOS 1.png';
import moun from '../assets/images/mountain.png';
import './Dream.css';
import Gallery from '../components/Gallery'; 

const Dream = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const header = document.getElementById("header");
      const image = document.getElementById("header-image");
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.style.fontSize = "30px";
        image.style.width = "100px"; // Adjust the size as needed
      } else {
        header.style.fontSize = "90px";
        image.style.width = "400px"; // Adjust the size as needed
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div className="bod">
      <div id="header">
        
        <img id="header-image" src={nitin} alt="Profile" className="header-prof" />
        <img id="header-image" src={moun} alt="Mountain" className="pro" />
      </div>

      
      <div className="content">
        
      
        <p><b>KNS.</b></p>
        <p>Scroll down this frame to see the effect!</p>
        <p>IS IT NICE BRO!</p>
        <p>Rest is shit.Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="gallery-section">
        <h2>Gallery</h2>
        <Gallery /> {/* Include the Gallery component */}
      </div>
      
      </div>
    </div>
  );
};

export default Dream;
