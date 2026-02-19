import React from "react";
import "../styles/Skills.css";

const skills = [
  // Lenguajes y fundamentos
  { name: "Python", icon: "🐍" },
  { name: "SQL básico", icon: "🗄️" },
  { name: "POO", icon: "💻" },

  // Data Science
  { name: "Machine Learning", icon: "🤖" },

  // Desarrollo web
  { name: "Desarrollo Frontend", icon: "💻" }
];


const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
