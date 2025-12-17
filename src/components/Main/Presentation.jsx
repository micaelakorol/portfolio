import React, { useEffect } from "react";
import style from "./styles/presentation.module.css";
import SocialMedia from "./elements/SocialMedia";
import AOS from "aos";
import "aos/dist/aos.css";

const Presentation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <main className={style.containerPresentation}>
      {/* Texto */}
      <section
        className={style.textWrapper}
        data-aos="fade-left"
      >
        <span className={style.greeting}>Hola, soy</span>

        <h1 className={style.titleName}>
         <span>Micaela</span>
        </h1>

        <h2 className={style.titleRole}>
          Frontend Developer
        </h2>

        <p className={style.description}>
          Me enfoco en crear interfaces web simples, ordenadas y fáciles de usar.
        </p>

        <SocialMedia />
      </section>
    </main>
  );
};

export default Presentation;
