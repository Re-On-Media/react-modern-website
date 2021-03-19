import React, { useState, useEffect } from "react";
import Cover from "./components/cover/Cover";
import Intro from "./components/intro/Intro";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import Map from "./components/people/Map";
import "./App.css";

function App() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="App">
      <Cover />
      <Intro />
      <Slider scrollPosition={scrollPosition} />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
