import React from 'react';
import { projects } from './infoCard';
import style from '../styles/projects.module.css';

const Card = () => {
  return (
    <section className={style.containerCard}>
      {projects.map((item) => (
        <div key={item.id} className={`${style.bodyCard} ${item.id === 111 ? style.border : ''}`}
>
          <img
            src={item.image}
            alt={item.title}
            width={290}
            height={290}
            className={style.imageCard}
          />
          <h5 className={style.titleCard}>{item.title}</h5>
          <p className={style.description}>{item.description}</p>
          <section className={style.containerButtonCard}>
            <a
              href={item.viewCode}
              className={style.buttonCard}
              target="_blank"
            >
              {item.viewCode === '' ? 'En proceso de desarrollo' : 'Github'}
            </a>
            {item.visit !== '' && (
              <a href={item.visit} className={style.buttonCard} target="_blank">
                Visitar Sitio
              </a>
            )}
          </section>
        </div>
      ))}
    </section>
  );
};

export default Card;
