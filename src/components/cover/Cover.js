import React from "react";
import { motion } from "framer-motion";
import IsOnScreen from "../IsOnScreen";
import coverVideo from "../../media/covervideo1.mp4";
import styles from "./Cover.module.css";

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.01,
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
  const line =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, minus ut! Eveniet modi corrupti minima placeat, mollitia provident tenetur numquam consequatur magni adipisci. Iure quos eaque quod, voluptates suscipit placeat.";

  return (
    <div className={styles.container}>
      <video className={styles.video} src={coverVideo} autoPlay loop muted />

      <IsOnScreen>
        <h1 className={styles.title}>Tech : Expert</h1>
        <motion.div
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className={styles.moto}
        >
          {line.split("").map((char, index) => {
            return (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.div>

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
