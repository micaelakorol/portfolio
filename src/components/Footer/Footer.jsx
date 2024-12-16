import React from "react";
import SocialMedia from "../Main/elements/SocialMedia";
import style from "./styles/footer.module.css";
import styles from '../Project/styles/projects.module.css'
import image from '../Main/styles/presentation.module.css'
import { download } from "../../assets/images";
const Footer = () => {
  return (
    <footer className={style.containerFooter}>
      <section className={style.socialMedia}>
        <SocialMedia />
        <a href="https://drive.google.com/file/d/1wO4zGwRtCsKel88bspqCSKDFWsiHdVh_/view" target="_blank">
          <img src={download} alt="download" width={23} height={23} className={image.imageSocial}/>
        </a>
      </section>
      <p className={styles.description}>Desarrollado por Micaela ❤️</p>
    </footer>
  );
};

export default Footer;
