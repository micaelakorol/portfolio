import React from "react";
import style from "./styles/skills.module.css";
import { Element } from "react-scroll";
import { skills } from "../../utils/skills";

const Skills = () => {
  return (
    <section
      className={style.containerSkill}
      data-aos="fade-left"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
    >
      <Element name="skills">
        <h3 className={style.skillTitle}>–Habilidades</h3>
        <div>
          {skills.map((item) => (
            <abbr title={item.name} key={item.id}>
              <img
                src={item.src}
                alt={item.name}
                width={66}
                height={66}
                className={style.imageSkill}
              />
            </abbr>
          ))}
        </div>{" "}
      </Element>
    </section>
  );
};

export default Skills;
