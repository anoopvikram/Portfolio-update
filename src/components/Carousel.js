import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/carousel.css";

function Carousel() {
  const projects = [
    {
      id: 1,
      title: "Cinescope.",
      description: "A modern IMDB-style movie site where you can explore film details, ratings, and posters.",
      image: "/assets/movie.png",
      link: "https://cine-scope-plum.vercel.app/"
    },
    {
      id: 2,
      title: "Cafe Website.",
      description: "A cozy and modern cafe website showcasing the menu and ambience.",
      image: "/assets/cafe.png",
      link:"https://anoopvikram.github.io/cafe-update/"
    },
    {
      id: 3,
      title: "Move-It.",
      description: "Move-It is a responsive logistics and moving service website built with Bootstrap.",
      image: "/assets/moveit.png",
    },
    {
      id: 4,
      title: "TinDog.",
      description: "TinDog is a playful matchmaking website for dogs, inspired by Tinder.",
      image: "/assets/tindog.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="proj-page">
      <div className="proj-carousel">
        <button className="nav-btn left" onClick={handlePrev}>
          ❮
        </button>

        <div className="proj-wrapper">
          <div
            className="proj-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="proj-card" key={index}>
                <div className="inside-card">
                    <img src={project.image} alt={project.title} className="proj-image" />
                    <div className="proj-info">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-title">
                        {project.title}
                      </a>
                    ) : (
                      <Link to={`/projects/${project.id}`} className="proj-title">
                        {project.title}
                      </Link>
                    )}
                        <p className="proj-desc">{project.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Carousel;
