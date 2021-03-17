import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { slides } from "./Slides";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slider = ({ scrollPosition }) => {
  //Control slider pagination
  const [next, setNext] = useState(0);
  //Controll the position of the slider inside its container
  const [sliderPos, setSliderPos] = useState("sliderContainerTop");
  //Control if scrolling up or down
  const [scrollPos, setScrollPos] = useState(0);

  const [ref, inView, entry] = useInView({ threshold: 0.189 });

  //Put the slider to the top on first render
  useEffect(() => {
    setSliderPos("sliderContainerTop");
  }, []);

  //Control the slider position as we scroll down or up
  useEffect(() => {
    if (!inView && scrollPosition < 1000) {
      setSliderPos("sliderContainerTop");
    } else if (inView && scrollPosition >= 1000) {
      setSliderPos("sliderContainerFixed");
    } else if (!inView) {
      setSliderPos("sliderContainerBottom");
    }

    let positionInsideDiv = scrollPosition - entry?.target.offsetTop;

    if (inView) {
      if (positionInsideDiv < 800 && next != 0) {
        setNext(0);
      } else if (
        positionInsideDiv >= 800 &&
        positionInsideDiv <= 1700 &&
        next != 1
      ) {
        setNext(1);
      } else if (
        positionInsideDiv > 1700 &&
        positionInsideDiv <= 2500 &&
        next != 2
      ) {
        setNext(2);
      } else if (
        positionInsideDiv > 2500 &&
        positionInsideDiv < 4000 &&
        next != 3
      ) {
        setNext(3);
      }
    }
    setScrollPos(scrollPosition);
  }, [inView, scrollPosition]);

  const paginate = () => {
    if (next < slides.length - 1) {
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
        <AnimatePresence exitBeforeEnter>{slides[next]}</AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
