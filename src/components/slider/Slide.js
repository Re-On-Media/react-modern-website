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
      duration: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const titleItemVariant = {
  hidden: {
    y: "-50vh",
  },
  show: {
    y: "0vw",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const leftItemVariant = {
  hidden: {
    x: "-200vw",
  },
  show: {
    x: "0vw",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const rightItemVariant = {
  hidden: {
    x: "200vw",
  },
  show: {
    x: "0vw",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
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
      className={styles.slideContainer}
    >
      <motion.div className={styles.title} variants={titleItemVariant}>
        <h2>Our services</h2>
        <h1>{title}</h1>
      </motion.div>
      <div className={styles.info}>
        <motion.div className={styles.img} variants={leftItemVariant}>
          <img src={img} alt="" />
        </motion.div>
        <motion.div className={styles.desc} variants={rightItemVariant}>
          <p>{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slide;
