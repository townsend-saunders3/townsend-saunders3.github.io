// components/Header.js
import React from 'react';
import '../assets/styles/App.css';

function Header() {
  return (
    <header className="header">
      <h1>Townsend Saunders III</h1>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="https://townly.streamlit.app">ChatBot</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/townsend-saunders3" className="social-link github">GitHub</a>
        </li>
        <li className="nav-item">

            <a href="Townsend Saunders Resume Feb.2025.5.pdf" download="townsend_saunders_3_resume.pdf">Download Resume</a>

        </li>
      </ul>
    </header>
  );
}

export default Header;
