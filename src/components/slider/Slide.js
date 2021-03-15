import React from "react";
import { motion } from "framer-motion";
import styles from "./Slider.module.css";

const slideVariants = {
  hidden: {
    x: "200vw",
  },
  show: {
    x: "0vw",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const Slide = ({ title, img, description, aditionalClass }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={`${styles[aditionalClass]} ${styles.slideContainer}`}
    >
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        <div className={styles.img}>{img}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </motion.div>
  );
};

export default Slide;
