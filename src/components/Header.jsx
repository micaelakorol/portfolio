import React from 'react';
//import foto from '../assets/tu-foto.jpg';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="hero">
      {/*<img src="" alt="Micaela Korol" className="profile-img"/>}*/}
      <h1>Micaela Korol</h1>
      <h3>Analista de Datos en formación</h3>
      <nav className="social-links">
        <a href="https://www.linkedin.com/in/micaelakorol/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/micaelakorol21" target="_blank">
          GitHub
        </a>
        <a href="mailto:micaelakorol@gmail.com">Email</a>
      </nav>
    </header>
  );
};

export default Header;
