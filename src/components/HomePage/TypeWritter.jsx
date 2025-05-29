import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = ["Software Developer", "Problem Solver", "MERN Stack Developer", "Frontend Developer", "Cloud Enthusiast", "Collaborative developer"],
  typingSpeed = 150, // Speed at which characters appear (ms)
  deletingSpeed = 100, // Speed at which characters disappear (ms)
  pauseDuration = 1500, // Duration to pause at the end of a word (ms)
  className = "" // Allows passing additional Tailwind classes to the text
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    const handleType = () => {
      setDisplayText(currentWord.substring(0, currentCharIndex + 1));
      setCurrentCharIndex(prev => prev + 1);
    };

    const handleDeleting = () => {
      setDisplayText(currentWord.substring(0, currentCharIndex - 1));
      setCurrentCharIndex(prev => prev - 1);
    };

    if (isDeleting) {
      // Deleting phase
      if (currentCharIndex === 0) {
        //switch to next word and start typing
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length); // Loop through words
      } else {
        // Continue deleting
        timer = setTimeout(handleDeleting, deletingSpeed);
      }
    } else {
      // Typing phase
      if (currentCharIndex === currentWord.length) {
        // Finished typing, pause then start deleting
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        // Continue typing
        timer = setTimeout(handleType, typingSpeed);
      }
    }

    // Cleanup function: clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);

  }, [currentCharIndex, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {/* Blinking Cursor */}
      <span 
        className="
          inline-block 
          border-r-2 
          border-white // Color of the cursor
          ml-1 
          animate-blink // Custom animation for blinking
        "
      >
        &nbsp; {/* Non-breaking space to ensure cursor visibility */}
      </span>
    </span>
  );
};

export default Typewriter;