import React, { useState } from 'react';

const Carousel = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out ml-36"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {components.map((Component, index) => (
          <div className="flex-shrink-0 w-full lg:w-1/3 " key={index}>
            {Component}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
