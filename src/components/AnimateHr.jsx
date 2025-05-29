import React, { useState, useEffect } from 'react';

const AnimatedHr = ({
  className = '',
  height = 'h-1',
  color = 'bg-white',
  duration = 1000,
  delay = 100,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <hr
      className={`
        ${color}
        ${height}
        w-full     
        transform
        origin-left       
        transition-transform
        ease-out
        ${className}      
        ${shouldAnimate ? 'scale-x-100' : 'scale-x-0'}
      `}
      style={{
        transitionDuration: `${duration}ms`, // Dynamic duration
      }}
    />
  );
};

export default AnimatedHr;