// useMouseParallax.js
import { useEffect, useState } from 'react';

export default function useMouseParallax(factor = 0.05) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return {
    transform: `translate(-${mousePosition.x * factor}px, -${mousePosition.y * factor}px)`
  };
}

