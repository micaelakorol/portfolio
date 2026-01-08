import style from '../style/experience.module.css';

const Card = () => {
  return (
    <section className={style.containerCard}>
      <h5 className={style.titleCard}>Soporte Digital y Atención al Cliente</h5>
      <p className={style.description}>
        {' '}
        Atención, seguimiento y soporte remoto a usuarios a través de redes
        sociales, con foco en la resolución de problemas y la comunicación
        clara.
      </p>
      <section className={style.containerImages}>
        <img
          src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1767881507/new-portfolio/Captura_de_pantalla_2026-01-08_111050_hbz8fe.png"
          alt="titulo"
          className={style.imageCard}
        />
        <img
          src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1761168021/landing_page_herreria/2-pica-Photoroom_utjaeb.png"
          className={style.imageCard}
        />
      </section>
    </section>
  );
};

export default Card;
