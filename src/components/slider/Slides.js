import React from "react";
import digitalsolutions from "../../media/digitalsolutions.png";
import webdev from "../../media/webdev.png";
import smartphone from "../../media/smartphone.png";
import test from "../../media/businessman.png";
import Slide from "./Slide";

//https://pixabay.com/illustrations/man-working-business-office-work-4365597/

const slidesInfo = [
  {
    title: "Digital Solutions",
    img: digitalsolutions,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio.",
    aditionalClass: "fst",
  },
  {
    title: "Web Development",
    img: webdev,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio.",
    aditionalClass: "scd",
  },
  {
    title: "Mobile Apps",
    img: smartphone,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio.",
    aditionalClass: "fst",
  },
  {
    title: "FOUTH SLIDE",
    img: test,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio. orem ipsum dolor sit amet consectetur adipisicing elit. Error, distinctio.",
    aditionalClass: "scd",
  },
];

export const slides = slidesInfo.map((slide, index) => (
  <Slide
    key={index}
    title={slide.title}
    img={slide.img}
    description={slide.description}
    aditionalClass={slide.aditionalClass}
  />
));
