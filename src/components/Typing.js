import React, { useState, useEffect } from "react";

function TypingEffect({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        const nextChar = text[index];
        if (nextChar !== undefined) {
          setDisplayedText((prev) => prev + nextChar);
          setIndex((prev) => prev + 1);
        }
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <p dangerouslySetInnerHTML={{ __html: displayedText }} />
  );
}

export default TypingEffect;
