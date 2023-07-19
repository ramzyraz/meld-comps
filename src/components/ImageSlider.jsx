import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/img3.jpg',
    '/assets/img4.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {/* Image */}
      <Image
        src={images[activeIndex]}
        alt={`Image ${activeIndex + 1}`}
        className="w-full h-[300px] object-cover rounded-lg"
        width={800}
        height={300}
      />

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
