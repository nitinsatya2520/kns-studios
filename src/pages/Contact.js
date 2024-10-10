import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import the combined CSS file
import Navbar from '../components/Navbar';
import ntin from '../assets/images/KNS STUDIOS raw.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6qcroer',    // Replace with your Service ID
      'template_71gn4o5',   // Replace with your Template ID
      formData,
      'hZyjprULy72195Qlg'        // Replace with your User ID
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
    }, (error) => {
      console.log('Failed to send email.', error.text);
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
    <div id="contact">
      <h2>Contact Us</h2>
      <p>Please fill out the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="contact-details">
        <p>For further inquiries, you can also reach us at:</p>
        <p>Email: <a href="mailto:support@example.com">nitinsatya656@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+9182354979</a></p>
        <img src={ntin} alt="Profile" className="profile-im" />
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
