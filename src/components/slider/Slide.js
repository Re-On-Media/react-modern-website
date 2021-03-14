import React from "react";
import { motion } from "framer-motion";
import styles from "./Slider.module.css";

const slideVariants = {
  hidden: {
    x: "200vw",
    opacity: 0,
  },
  show: {
    x: "0vw",
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Slide = ({ text, class1 }) => {
  return (
    <div className={styles[class1]}>
      <div>{text}</div>
    </div>
  );
};

export default Slide;
