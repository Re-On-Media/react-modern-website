import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import Slide from "./Slide";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slideVariants = {
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
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const Slider = ({ scrollPosition }) => {
  const [next, setNext] = useState(0);
  const [ref, inView, entry] = useInView({ threshold: 0.29 });
  const [sliderPos, setSliderPos] = useState("sliderContainerTop");
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setSliderPos("sliderContainerTop");
  }, []);

  useEffect(() => {
    if (!inView && scrollPosition < 1000) {
      setSliderPos("sliderContainerTop");
    } else if (inView && scrollPosition >= 1000) {
      setSliderPos("sliderContainerFixed");
    } else if (!inView) {
      setSliderPos("sliderContainerBottom");
    }
  }, [inView, scrollPosition]);

  useEffect(() => {
    if (scrollPos > scrollPosition) {
      console.log("scrolling up");
    } else if (scrollPos < scrollPosition) {
      console.log("scrolling down");
    }

    setScrollPos(scrollPosition);
  }, [scrollPosition]);

  const slide1 = (
    <motion.div
      key="1"
      variants={slideVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Slide text="hola1" class1="fst" />
    </motion.div>
  );

  const slide2 = (
    <motion.div
      key="2"
      variants={slideVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Slide text="hola2" class1="scd" />
    </motion.div>
  );

  const ssld = [slide1, slide2];

  const paginate = () => {
    if (next < ssld.length - 1) {
      setNext((prev) => prev + 1);
    } else {
      setNext(0);
    }
  };

  return (
    <div className={styles.container} ref={ref}>
      <div
        onClick={() => {
          paginate();
        }}
        className={styles[sliderPos]}
      >
        <AnimatePresence exitBeforeEnter>{ssld[next]}</AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
