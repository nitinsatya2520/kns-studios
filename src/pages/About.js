import React from 'react';
import './About.css';
import ntin from '../assets/images/KNS STUDIOS raw.png';

const About = () => {
    return (
        
        <div className="about-container">
            <h2>About Us</h2>
            <p>K N S Studios

Founded in 2023 by K Nitin Satya, K N S Studios is a dynamic and innovative short film production company. Our mission is to create compelling and thought-provoking short films that captivate audiences and inspire meaningful conversations. With a passion for storytelling and a commitment to excellence, we bring together talented filmmakers, writers, and artists to produce high-quality films across various genres. At K N S Studios, we believe in the power of short films to make a big impact, and we are dedicated to pushing the boundaries of creativity and cinematic expression.</p>
            <img src={ntin} alt="Profile" className="profile-im" />
            
        </div>
    );
}

export default About;
