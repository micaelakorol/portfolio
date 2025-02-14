import React from "react";
import SocialMedia from "../Main/elements/SocialMedia";
import style from "./styles/footer.module.css";
import styles from '../Project/styles/projects.module.css'
import ButtonDownload from '../../utils/reusable/ButtonDownload'
const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <section className={style.socialMedia}>
        <SocialMedia />
       <ButtonDownload/>
      </section>
      <p className={styles.description}>Desarrollado por Micaela ❤️</p>
    </footer>
  );
};

export default Footer;
