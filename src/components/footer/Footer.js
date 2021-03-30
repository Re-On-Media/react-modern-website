import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h1>Tech : Expert</h1>
        <p>Asdasd Street, 10, Your City</p>
      </div>
      <div className={styles.contact}>
        <h3>Always here for you</h3>
      </div>
      <div className={styles.sns}>
        <div className={styles.design}>Design by Tech : Expert</div>
        <div className={styles.snslinks}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-linkedin ${styles.linkedin}`}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-twitter ${styles.twitter}`}></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className={`fab fa-facebook ${styles.facebook}`}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
