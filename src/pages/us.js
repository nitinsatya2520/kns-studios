import nitin from '../assets/images/KNS STUDIOS.png';
import React from 'react';
import './us.css';

const us = () => {
  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
          justify-center items-center align-center mt-40 
          mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          <h4 className="text-center text-xl font-bold">
            Hi and welcome to
          </h4>
          
          <h2 className="text-center text-emerald-500 text-5xl font-bold">
            K N S STUDIOS
          </h2>
        </div>
        <a href="https://www.youtube.com/@kns_studios">
        <img src={nitin} alt="Profile" className="profile-image" />
            </a>
        <p className="text-center">
          WE SHOW YOU YOUR DREAMS...
        </p>
      </div>
      
    </section>
  );
}

export default us;
