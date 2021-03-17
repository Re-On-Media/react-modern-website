import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const svgVariants = {
  hidden: { y: "30vh", x: "-200vw" },
  visible: {
    x: 0,
    opacity: 1,
    y: "30vh",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  toTheTop: {
    opacity: 1,
    width: "100%",
    top: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Navbar = ({ scrollPosition }) => {
  const [position, setPosition] = useState("");
  useEffect(() => {
    if (scrollPosition === 0) {
      setPosition("visible");
    } else if (scrollPosition > 0) {
      setPosition("toTheTop");
    }
  }, [scrollPosition]);

  return (
    <motion.h1
      id={styles.svg}
      variants={svgVariants}
      initial="hidden"
      animate={position}
    >
      Welcome to Tech : Consulting
    </motion.h1>
  );
};

export default Navbar;
