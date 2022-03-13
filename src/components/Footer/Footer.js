import React from "react";
import styles from "./Footer.module.css";
import src from "../../img/fiverr.png";
import { useNavigate } from "react-router-dom";


function Footer() {

  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="https://www.fiverr.com/share/9wLkXx" className={styles.img}>
          <img src={src} alt="Fiverr Logo" className={styles.img} />
        </a>
      </div>
        <p onClick={() => navigate('/about-us')} className={styles.link}>About Us</p>

      <p>© Bonhora 2022</p>
    </footer>
  );
}

export default Footer;
