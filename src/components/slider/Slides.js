import React from "react";
import Slide from "./Slide";

const slidesInfo = [
  {
    title: "FIRST SLIDE",
    img: "First image",
    description: "Slide description",
    aditionalClass: "fst",
  },
  {
    title: "SECOND SLIDE",
    img: "First image",
    description: "Slide description",
    aditionalClass: "scd",
  },
  {
    title: "THIRD SLIDE",
    img: "First image",
    description: "Slide description",
    aditionalClass: "fst",
  },
  {
    title: "FOUTH SLIDE",
    img: "First image",
    description: "Slide description",
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
