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
          <a href="https://linkedin.com/in/townsendsaunders3">LinkedIn</a>
        </li>
        <li className="nav-item">

            <a href="Townsend_Saunders_III_Resume_7.0.3" download="townsend_saunders_3_resume.pdf">Download Resume</a>

        </li>
      </ul>
    </header>
  );
}

export default Header;
