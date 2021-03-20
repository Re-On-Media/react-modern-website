import React from "react";
import { motion } from "framer-motion";
import IsOnScreen from "../IsOnScreen";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <IsOnScreen>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            VISIT US
          </motion.h1>
          <motion.h4
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            We are looking forward to welcoming you
          </motion.h4>
        </IsOnScreen>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6365410197723!2d-3.7056720845024542!3d40.416901879364985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a07d7dc7%3A0x694aee57da1dc679!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1sen!2ses!4v1616112118596!5m2!1sen!2ses"
        title="address"
        className={styles.map}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <p className={styles.address}>Gran Vía, 32, piso 8, Madrid</p>
    </div>
  );
};

export default Map;
