// useMouseParallax.js
import { useEffect, useState } from 'react';

export default function useMouseParallax(factor = 0.05) {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 2 * factor * 100;
      const y = ((e.clientY / innerHeight) - 0.5) * 2 * factor * 100;
      setPosition({
        x: `${50 + x}%`,
        y: `${50 + y}%`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factor]);

  return {
    backgroundPosition: `${position.x} ${position.y}`
  };
}
