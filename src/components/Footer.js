// components/Footer.js
import React from 'react';
import '../assets/styles/App.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="https://townly.streamlit.app" className="social-link github">ChatBot</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/townsend-saunders3" className="social-link github">GitHub</a>
        </li>
        <li className="nav-item">
          <a href="Townsend Saunders Resume T.ML 1.2.1.pdf" download="townsend_saunders_3_resume.pdf" className="social-link resume">Resume</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
