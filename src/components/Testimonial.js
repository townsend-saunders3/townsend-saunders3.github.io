// components/Testimonial.js
import React from 'react';

function Testimonial({ name, text, image, caption }) {
  return (
    <div className="testimonial-card">
        <img src={image} alt={caption} className="testimonial-image"/>
        <p className="testimonial-text">"{text}"</p>
        <p className="testimonial-author">- {name}</p>
        <p className="testimonial-caption">{caption}</p>
    </div>
  );
}

export default Testimonial;
