import style from './style/experience.module.css';
import Card from './elements/Card';
import { Element } from 'react-scroll';
import Aos from 'aos';

const Experience = () => {
  Aos.refresh();
  return (
    <Element name="experience">
      <section
        className={style.containerProject}
      >
        <h3>–Experiencia</h3>
       <Card/>
      </section>{' '}
    </Element>
  );
};

export default Experience;
