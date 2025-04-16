import React from "react";
import "./styles/Intro.css";
import IntroImage from "../components/IntroImage";
import useMouseParallax from "../components/useMouseParallax.js";
import Header from "../components/Header.js"

function Intro() {
  const backgroundStyle = useMouseParallax(0.07); 

  return (
    <div className="intro-page">
      <Header/>
      <div className="background" style={backgroundStyle}></div> {/* Background container */}
      <div className="whole-grid">
        <div className="grid0-container">
          <h2>Let see what I got.</h2>
          <p>
          Hey there! Here’s a glimpse into my creative corner — clean front-end design, sleek animations, and smooth, responsive layouts. 
          Scroll through and check out how I bring interfaces to life!
          </p>
        </div>
        <IntroImage className="intro-image"/>
        <div className="grid2-container">
          <div className="intro-card">
            <img src="/assets/icons/frontend.png" alt="Front-End Design" className="card-icon" />
            <h2>Front-End Design</h2>
            <p>
                Crafting clean, responsive interfaces that speak your brand.
            </p>
          </div>
          <div className="intro-card">
            <img src="/assets/icons/anime.png" alt="Front-End Design" className="card-icon" />
            <h2>Website Animation</h2>
            <p>
                Bringing pages to life with motion and smooth transitions.
            </p>
          </div>
          <div className="intro-card">
            <img src="/assets/icons/ui.png" alt="Front-End Design" className="card-icon" />
            <h2>Interactive UI Experiences</h2>
            <p>
                Building user interfaces that feel as good as they look.
            </p>
          </div>
          <div className="intro-card">
            <img src="/assets/icons/layout.png" alt="Front-End Design" className="card-icon" />
            <h2>Responsive Layouts</h2>
            <p>
                Designs that adapt perfectly to any screen size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
