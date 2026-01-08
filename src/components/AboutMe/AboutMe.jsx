import about from './style/aboutMe.module.css';
import Aos from 'aos';
import { Element } from 'react-scroll';
const AboutMe = () => {
  Aos.refresh();
  return (
    <div className={about.container}>
      <Element name="aboutMe">
        <article
          className={about.containerAboutMe}
        >
          <h3>—Acerca de mí</h3>
          <p>
            Soy estudiante de Analista Programador en la Universidad Nacional de
            La Plata.
          </p>
          <p>
            Cuento con formación en desarrollo web y experiencia en soporte
            remoto brindado a través de redes sociales. Actualmente, continúo
            capacitándome en el área IT, con foco en ciencia de datos.
          </p>
          <p>
            ¿Qué puedo aportar? - Una combinación de conocimientos técnicos,
            comunicación clara y orientación a la resolución de problemas.
          </p>{' '}
        </article>
      </Element>
    </div>
  );
};

export default AboutMe;
