import React from "react";
import IsOnScreen from "../IsOnScreen";
import { motion } from "framer-motion";
import styles from "./Intro.module.css";
import imageLeft from "../../media/leftteam.jpg";
import imageRight from "../../media/rightteam.jpg";

const introVariants = {
  hidden: {
    x: "-150vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.3,
      bounce: 0.35,
    },
  },
};

const Intro = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.infoContainer}>
        <IsOnScreen>
          <motion.h1 variants={introVariants} initial="hidden" animate="show">
            Our team of experts
          </motion.h1>
          <motion.h3 variants={introVariants} initial="hidden" animate="show">
            Always ready for you
          </motion.h3>
        </IsOnScreen>
      </motion.div>
      <div className={styles.imgContainer}>
        <img src={imageLeft} alt="" />
        <img src={imageRight} alt="" />
      </div>
    </div>
  );
};

export default Intro;
