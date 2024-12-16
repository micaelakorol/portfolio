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
            src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1716918780/ult-portfolio/avatar_history_cfiwz6.svg"
            height={150}
            width={230}
            alt="imagen"
            className={style.imageMain}
          />
        </section>
        <section>
          <h1 className={style.title}>
            ¡Hola! Te doy la bienvenida
            <br />a mi portafolio.
          </h1>
          <h2 className={style.titleFrontend}>
            Soy Micaela y me especializo en <br />
           <span className={style.front}>Desarrollo Frontend.</span> 
          </h2>
          <SocialMedia />
        </section>
      </main>
    </>
  );
};

export default Presentation;
