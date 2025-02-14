import React from "react";
import title from "../About-Skills/styles/skills.module.css";
import style from "./styles/projects.module.css";
import Card from "./elements/Card";
import { Element } from "react-scroll";
import Aos from "aos";

const MyProjects = () => {
  Aos.refresh();
  return (
    <Element name="projects">
      <section
        className={style.containerProject}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className={title.skillTitle}>–Proyectos</h3>
        <Card />
      </section>{" "}
    </Element>
  );
};

export default MyProjects;
