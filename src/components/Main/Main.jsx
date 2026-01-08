import { useEffect } from 'react';
import style from './style/main.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <main className={style.containerPresentation}>
      <section className={style.textWrapper} data-aos="fade-left">
        <span className={style.greeting}>Perfil profesional</span>

        <h1 className={style.titleRole}>Micaela Korol</h1>

        <h2 className={style.titleName}>Estudiante de Analista Programador</h2>

        <p className={style.description}>
          Perfil orientado a tecnología, con experiencia en soporte remoto y
          conocimientos en desarrollo web.
        </p>
      </section>
    </main>
  );
};

export default Main;
