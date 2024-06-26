// components/Header.js
import React from 'react';
import '../assets/styles/App.css';

function Header() {
  return (
    <header className="header">
      <h1>Townsend Saunders III</h1>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="https://github.com/townsend-saunders3">GitHub</a>
        </li>
        <li className="nav-item">
          <a href="https://linkedin.com/in/townsendsaunders3">LinkedIn</a>
        </li>
        <li className="nav-item">

            <a href="townsend_saunders_resume_11_2023.pdf" download="townsend_saunders_3_resume.pdf">Download Resume</a>

        </li>
      </ul>
    </header>
  );
}

export default Header;
