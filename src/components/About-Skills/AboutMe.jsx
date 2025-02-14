import React from "react";
import about from "./styles/aboutMe.module.css";
import Skills from "./Skills";
import Aos from "aos";
import { Element } from "react-scroll";
const AboutMe = () => {
  Aos.refresh();
  return (
    <div className={about.container}>
      <Element name="aboutMe">
        <article
          className={about.containerAboutMe}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <h3>—Acerca de mí</h3>
          <p>
            Estudio Analista Programador en la Universidad Nacional de la Plata.
          </p>
          <p>
            {" "}
            Mis primeros pasos en el mundo de la programación comenzaron como un
            simple hobbie, pero rápidamente se convirtió en algo más
            significativo y desde entonces, me dediqué a aprender y mejorar mis
            habilidades. Mi objetivo, es crear experiencias digitales combinando
            la creatividad con la tecnología.
          </p>
          <p>
            ¿Qué puedo aportar? - Una mentalidad creativa y una actitud
            proactiva para aprender y adaptarme a diferentes situaciones.
          </p>{" "}
        </article>
      </Element>
      <Skills />
    </div>
  );
};

export default AboutMe;
