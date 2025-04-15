import React, { useState, useEffect } from "react";
function TechLove() {
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = ["React.", "Express.", "PostgreSQL.", "Node.js", "Javascript."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    },1100); // Change tech every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [technologies.length]);

  return (
    <div className="tech-love">
      <h2>
        I Love <br></br><span className="tech-name">{technologies[currentTech]}</span>
      </h2>
    </div>
  );
}

export default TechLove;
