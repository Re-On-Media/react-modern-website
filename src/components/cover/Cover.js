import { motion } from "framer-motion";
import React from "react";
import IsOnScreen from "../IsOnScreen";
import styles from "./Cover.module.css";

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.05,
      staggerChildren: 0.02,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Cover = () => {
  const line1 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quisquam.";
  const line2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  return (
    <div className={styles.container}>
      <IsOnScreen>
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className={styles.title}
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "_" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}

          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "_" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
      </IsOnScreen>
    </div>
  );
};

export default Cover;
