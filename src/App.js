// App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import './assets/styles/App.css'; 
// import townsend from './assets/images/IMG_6311.jpeg';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <hr /> */}
      {/* <div classname="testimonials-grid">
        <div className="card">
              <img src={townsend} alt="Dominique Parrish" className="testimonial-image" />
              <div className="bio">Townsend Saunders</div>
              <div className="testimonial">Data Scientist</div>
        </div>
        </div> */}
      {/* <div className='hero-background'> */}
      <div className="hero-section"></div>
      {/* </div> */}
      {/* <hr />  Divider */}
      <AboutMe />

      {/* <div className="waterfall"></div>  Waterfall Image */}
      {/* <div className="project-split"></div> */}
      <Projects />
      {/* <hr />  Divider */}
      
      <Testimonials />

      <Footer />

    </div>
  );
}

export default App;
