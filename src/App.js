import React, { useState, useEffect } from "react";
import Cover from "./components/cover/Cover";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import Video from "./components/video/Videob";
import People from "./components/people/People";
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
      <Slider scrollPosition={scrollPosition} />
      <Footer />
      <Video />
      <People />
      <Footer />
    </div>
  );
}

export default App;
