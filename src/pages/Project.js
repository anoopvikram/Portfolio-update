import React, { useState } from "react";
import "./styles/Project.css"; 
import { Link } from "react-router-dom";
import useMouseParallax from "../components/useMouseParallax.js";
import Header from "../components/Header.js";

function Project() {
    const backgroundStyle = useMouseParallax(0.03); //  parallax
    const projects = [
        {
          title: "Cinescope.",
          description: "A modern IMDB-style movie site where you can explore film details, ratings, and posters.",
          image: "/assets/movie.png",
        },
        {
          title: "Cafe Website.",
          description: "A cozy and modern cafe website showcasing the menu and ambience.",
          image: "/assets/cafe.png",
        },
        {
          title: "Move-It.",
          description: "Move-It is a responsive logistics and moving service website built with Bootstrap.",
          image: "/assets/moveit.png",
        },
        {
          title: "TinDog.",
          description: "TinDog is a playful matchmaking website for dogs, inspired by Tinder.",
          image: "/assets/tindog.png",
        },
      ];
      
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="proj-page">
      <Header/>
        <div className="proj-bg" style={backgroundStyle}></div>
        <div className="proj-carousel">
        <button onClick={prevSlide} className="nav-btn">&#10094;</button>

        <div className="proj-wrapper">
            <div
            className="proj-track"
            style={{ transform: `translateX(-${currentIndex * 103.5}%)` }}
            >
            {projects.map((project, index) => (
                <div className="proj-card" key={index}>
                    <img src={project.image} alt={project.title} className="proj-image" />
                    <div className="proj-info">
                        <Link to={`/projects/${project.id}`} className="proj-title">
                            {project.title}
                        </Link>
                        <p className="proj-desc">{project.description}</p>
                    </div>
                </div>
            ))}
            </div>
            <p className="desc">Take a look at my recent work, <br></br>let me know if something stands out to you.</p>
        </div>

        <button onClick={nextSlide} className="nav-btn">&#10095;</button>
        </div>
    </div>
  );
}

export default Project;
