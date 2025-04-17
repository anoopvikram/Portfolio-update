import React from "react";
import "./styles/Project.css"; 
import useMouseParallax from "../components/useMouseParallax.js";
import Header from "../components/Header.js";
import Carousel from "../components/Carousel.js";

function Project() {
  const backgroundStyle = useMouseParallax(0.07); //  parallax
  return (
    <>
      <Header/>
      <div className="proj-bg" style={backgroundStyle}></div>
      <div className="proj-main">
        <div className="carousel"><Carousel/></div>  
        <p className="desc">Take a look at my recent work, <br></br>let me know if something stands out to you.</p>
      </div>
    </>
  );
}

export default Project;
