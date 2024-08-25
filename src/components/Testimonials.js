// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "This is the best team I have ever worked with!",
    author: "Ramya sree",
  },
  {
    quote: "These guys just made me feel, what is impossible",
    author: "Jhanavi",
  },
  {
    quote: "Amazing work, delivered on time and beyond expectations.",
    author: "Dhruthi",
  },
  {
    quote: "What i can say about me.",
    author: "Satya",
  },
  {
    quote: "For every Decade there will be a benchmark setter and those are these.",
    author: "Venila",
  },
  {
    quote: "Very professional and skilled in all tech.",
    author: "Surya",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
