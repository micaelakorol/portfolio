import React from "react";
import style from "./styles/presentation.module.css";
import SocialMedia from "./elements/SocialMedia";
import Aos from "aos";

const Presentation = () => {
  Aos.refresh();
  return (
    <>
      <main
        className={style.containerPresentation}
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        {/** Main image */}
        <section>
          <img
            src="https://is.gd/C6vJWm"
            height={150}
            width={230}
            alt="imagen"
            className={style.imageMain}
          />
        </section>
        <section>
          <h1 className={style.title_name}>
          ¡Hola! Soy Micaela
          </h1>
          <h2 className={style.titleFrontend}>
          Estudiante y Desarrolladora Frontend
          </h2>
          <SocialMedia />
        </section>     
      </main>
    </>
  );
};

export default Presentation;
