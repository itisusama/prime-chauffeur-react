import React, { useState, useEffect } from 'react';
import CarouselSmallScreen from './CarouselSmallScreen';
import CarCards from './CarCards';

const CardSlider = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Change the threshold according to your definition of "sm"
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
 
  return (
    <div>
      {isSmallScreen ? (
        <CarouselSmallScreen />
      ) : (
        // Map over the array of props and render CarCards components
        <CarCards/>
      )}
    </div>
  );
};

export default CardSlider;