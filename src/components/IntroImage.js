import React, { useRef } from "react";
import "./styles/IntroImage.css";

function IntroImage() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = (offsetX / rect.width) * 100;

    if (imgRef.current) {
      imgRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    }
  };

  const resetClip = () => {
    if (imgRef.current) {
      imgRef.current.style.clipPath = `inset(0 100% 0 0)`; // reset to half
    }
  };

  return (
    <div
      className="grid1-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetClip}
    >
      <img className="base-img" src="/assets/artist.png" alt="artist" />
      <img
        ref={imgRef}
        className="top-img"
        src="/assets/coder.png"
        alt="mountain"
      />
    </div>
  );
}

export default IntroImage;
