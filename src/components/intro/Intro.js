import React from "react";
import IsOnScreen from "../IsOnScreen";
import { motion } from "framer-motion";
import styles from "./Intro.module.css";
import imageLeft from "../../media/leftteam.jpg";
import imageRight from "../../media/rightteam.jpg";

const introVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <IsOnScreen>
          <motion.h1 variants={introVariants} initial="hidden" animate="show">
            Our team of experts
          </motion.h1>
          <motion.h3 variants={introVariants} initial="hidden" animate="show">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            ex.
          </motion.h3>
        </IsOnScreen>
      </div>
      <div className={styles.imgContainer}>
        <img src={imageLeft} className={styles.imageLeft} alt="imageleft" />
        <img src={imageRight} className={styles.imageRight} alt="imageRight" />
      </div>
    </div>
  );
};

export default Intro;
