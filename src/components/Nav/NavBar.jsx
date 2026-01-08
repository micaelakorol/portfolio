import styleNav from './style/navBar.module.css';
import Aos from 'aos';
import { Link } from 'react-scroll';

const NavBar = () => {
  Aos.refresh();
  return (
    <nav
      className={styleNav.containerNav}
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <div className={styleNav.links}>
        <Link activeClass="active" to="aboutMe">
          {' '}
          <button className={styleNav.btnNav}>Sobre Mí</button>
        </Link>
        <Link activeClass="active" to="experience">
          {' '}
          <button className={styleNav.btnNav}>Experiencia</button>{' '}
        </Link>
        <a href="mailto:micaelakorol@gmail.com" className={styleNav.btnNav}>
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
