import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Testimonials.css';
import dom from '../assets/images/IMG_5786.jpeg';
import tanatswa from '../assets/images/IMG_6290.jpeg'
import helen from '../assets/images/IMG_6288.JPG'
import jason from '../assets/images/jason.jpg'
import '../assets/styles/App.css'; 

function Testimonials() {
  return (
    <div className='testimonials-section'>
      <h2 className='section-header'>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="card">
            <img src={dom} alt="Dominique Parrish" className="testimonial-image" />
            <div className="bio">Dominique Parrish, American Freestyle Wrestler, 2022 World Champion</div>
            <div className="testimonial">"Townsends wide range of interests and technical skills gives him the ability to approach problems with a unique perspective. 
            His development of his wrestling app provided me insights about my wrestling. 
            I was then able use the information to develop practice plans."</div>
          </div>

          <div className="card">
            <img src={tanatswa} alt="Tanatswa Mapondera" className="testimonial-image"  />
            <div className="bio">Tanatswa Mapondera, Investment Associate at Aligned Climate Capital</div>
            <div className="testimonial">
            “Townsend and I have been close friends since meeting in college. 
            I’ve always admired his voracious appetite for learning and improvement, evidenced by successes in the classroom, workplace, sports, and every other facet of his life. 
            I’ve also come to appreciate his intellectual curiosity and pragmatic approach to problem-solving. 
            He’s an excellent collaborator and highly efficient at driving towards desirable results.”</div>
          </div>

          {/* Repeat the structure for the rest of the testimonials */}
          <div className="card">
            <img src={helen} alt="Helen Maroulis" className="testimonial-image"  />
            <div className="bio">Helen Maroulis, 2016 Olympic Gold Medalist @ Team USA</div>
            <div className="testimonial">Townsend is an excellent asset to any team. He is very brilliant in applying all that he’s learned to better the systems and world around him. His analytical skills, intelligence, and empathy have contributed to his growth as a human, teammate, and professional in the field</div>
          </div>
        </div>
      </div>
  );
}

export default Testimonials;

