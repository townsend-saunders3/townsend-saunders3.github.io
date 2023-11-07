import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Testimonials.css';
import dom from '../assets/images/IMG_5786.jpeg';
import tanatswa from '../assets/images/IMG_6290.jpeg'
import jason from '../assets/images/jason.jpg'
import '../assets/styles/App.css'; 

function Testimonials() {
  return (
    <div className='testimonials-section'>
      <h2 className='section-header'>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="card">
            <img src={dom} alt="Dominique Parrish" className="testimonial-image" />
            <div className="bio">American Freestyle Wrestler, 2022 World Champion</div>
            <div className="testimonial">"Townsends wide range of interests and technical skills gives him the ability to approach problems with a unique perspective. 
            His development of his wrestling app provided me insights about my wrestling. 
            I was then able use the information to develop practice plans."</div>
          </div>

          <div className="card">
            <img src={tanatswa} alt="Tanatswa Mapondera" className="testimonial-image"  />
            <div className="bio">Investment Associate at Aligned Climate Capital</div>
            <div className="testimonial">Testimonial from Person 2...</div>
          </div>

          {/* Repeat the structure for the rest of the testimonials */}
          <div className="card">
            <img src={jason} alt="Jason Hou" className="testimonial-image"  />
            <div className="bio">PhD student at MIT</div>
            <div className="testimonial">Testimonial from Person 2...</div>
          </div>
        </div>
      </div>
  );
}

export default Testimonials;

