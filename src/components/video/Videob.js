import React from "react";
import coverVideo from "../../media/covervideo1.mp4";
import "./Videob.css";

const Videob = () => {
  return (
    <div className="containVideo">
      <div className="cover-container">
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1>Re-On : Media</h1>
        <p>Developer | Translator | Content Creator | Entrepeneur</p>
      </div>
    </div>
  );
};

export default Videob;
