// AnimatedText.jsx

import React from "react";

const AnimatedText = ({ label }) => {
  // 1. Split the label into an array of characters
  const characters = label.split("");

  return (
    // We add a wrapper with 'flex' to keep the letters aligned
    // We use 'group' here so the parent NavLink can trigger the animation
    <span className="flex">
      {characters.map((char, index) => (
        <span
          key={index}
          // The delay is calculated based on the letter's index
          // index * 20ms gives a smooth, short stagger
          style={{ transitionDelay: `${index * 20}ms` }}
          className="inline-block transition-transform duration-300 ease-out 
                     group-hover:-translate-y-1" // Moves each letter up 1px
        >
          {/* Ensure spaces are rendered correctly */}
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
