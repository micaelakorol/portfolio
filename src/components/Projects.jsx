import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project-card">
        <h3> Predicción de la potabilidad del agua </h3>
        <p>
          Limpieza y transformación de datos con Python (pandas, numpy).
          Análisis exploratorio e identificación de variables críticas.
          Aplicación de modelo de clasificación: Random Forest logró el mejor
          equilibrio entre precision y recall. Documentación y código completos
          en el repo.
        </p>
        <a
          href="https://github.com/micaelakorol21/water_quality"
          target="_blank"
        >
          Ver código{' '}
        </a>
        
      </div>
       <div className="project-card">
        <h3> Proyectos de Desarrollo Web </h3>
        <p>
         Landing pages y sitios web simples creados con HTML, CSS y JavaScript.
        </p>
        <a
          href="https://github.com/micaelakorol"
          target="_blank"
        >
          Ir al sitio{' '}
        </a>
        
      </div>
    </section>
  );
};

export default Projects;
