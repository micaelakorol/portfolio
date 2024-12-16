import React from 'react';
import styleNav from './styles/navBar.module.css';
import Aos from 'aos';
import { Link } from 'react-scroll';
import { form } from '../../assets/images';

const NavBar = () => {
  Aos.refresh();
  return (
    <nav
      className={styleNav.containerNav}
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <Link activeClass="active" to="aboutMe">
        <button className={styleNav.btnNav}>Sobre mí</button>{' '}
      </Link>
      <Link activeClass="active" to="projects">
        {' '}
        <button className={styleNav.btnNav}>Proyectos</button>{' '}
      </Link>
      <Link activeClass="active" to="skills">
        {' '}
        <button className={styleNav.btnNav}>Habilidades</button>
      </Link>
      <a href={form} target="_blank" className={styleNav.btnNav}>
        Contacto
      </a>
    </nav>
  );
};

export default NavBar;
