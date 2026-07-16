import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>

      <div className="project-card">
        <h3> Procesamiento de datos de biodiversidad con Python - 2026</h3>
        <p>
          Proyecto académico desarrollado en equipo para el análisis y
          procesamiento de datasets reales de biodiversidad (IADIZA, iNaturalist
          y Xeno-canto). Incluye limpieza, validación y transformación de datos,
          junto con una interfaz interactiva en Streamlit para la visualización
          de resultados. Se trabajó en procesamiento de grandes volúmenes de
          datos, validación de calidad (coordenadas, fechas, duplicados),
          operaciones CRUD sobre registros, logging de operaciones y generación
          de reportes de calidad.
        </p>
        <a
          href="https://github.com/micaelakorol21/Analisis_Datos_Biodiversidad"
          target="_blank"
        >
          Ver código →{' '}
        </a>
      </div>

      <div className="project-card">
        <h3> Predicción de la potabilidad del agua - 2025 </h3>
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
          Ver código →{' '}
        </a>
      </div>
    </section>
  );
};

export default Projects;
