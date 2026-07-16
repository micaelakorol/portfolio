import React from "react";
import "../styles/Skills.css";

const skills = [
  // Lenguajes y fundamentos
  { name: "Python", icon: "Py" },
  { name: "SQL básico", icon: "SQL",},
  { name: "POO", icon: "POO" },

  // Data Science
  { name: "Machine Learning", icon: "ML" },
  { name: "Pandas", icon: "pd" },
  { name: "NumPy", icon: "np" },
  // Desarrollo web
   {name: "Desarrollo Frontend", icon: "DF" }
];


const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
