// components/Footer.js
import React from 'react';
import '../assets/styles/App.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="https://github.com/townsend-saunders3" className="social-link github">GitHub</a>
        </li>
        <li className="nav-item">
          <a href="https://linkedin.com/in/townsendsaunders3" className="social-link linkedin">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a href="townsend_saunders_resume_11_2023.pdf" download="townsend_saunders_3_resume.pdf" className="social-link resume">Resume</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
