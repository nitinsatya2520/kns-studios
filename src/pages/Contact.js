// Contact.js
import React from 'react';
import './Contact.css';
import ntin from '../assets/images/KNS STUDIOS raw.png';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <div className="contact-details">
        <p><strong>Name:</strong> KADAVAKOLLU NITIN SATYA</p>
        <p><strong>Email:</strong> <a href="mailto:nitinsatya656@gmail.com">nitinsatya656@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+918919741565">+91 8919741565</a></p>
        <p><strong>Address:</strong> Do no: 3/48, Venkatadri Nagar, Gannavaram</p>
      </div>
      <img src={ntin} alt="Profile" className="profile-im" />
    </section>
  );
}

export default Contact;
