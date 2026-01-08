import style from "./style/footer.module.css";
const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <section className={style.socialMedia}>
        <a href="https://www.linkedin.com/in/micaelakorol/">Linkedin</a>
        <a href="https://github.com/micaelakorol">Proyectos Web</a>
        <a href="mailto:micaelakorol@gmail.com">Contacto</a>
      </section>
      <p>Desarrollado por Micaela ❤️</p>
    </footer>
  );
};

export default Footer;
