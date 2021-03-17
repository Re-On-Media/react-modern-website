import { motion } from "framer-motion";
import React from "react";
import IsOnScreen from "../IsOnScreen";
import coverVideo from "../../media/covervideo1.mp4";

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

const loaderVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: ["0px", "30px"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    },
  },
};

const Cover = () => {
  const line1 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quisquam.";
  const line2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  return (
    <div className={styles.container}>
      <video className={styles.video} src={coverVideo} autoPlay loop muted />
      <IsOnScreen>
        <motion.h1
          className={styles.title}
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", duration: 1, bounce: 0.35 }}
        >
          Tech : Expert
        </motion.h1>
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className={styles.moto}
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
        <div className={styles.scrollDownContainer}>
          <div className={styles.scrollDown}>
            <motion.div
              variants={loaderVariants}
              initial="hidden"
              animate="show"
            ></motion.div>
          </div>
          <span>Scroll down</span>
        </div>
      </IsOnScreen>
    </div>
  );
};

export default Cover;
