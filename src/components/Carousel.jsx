import Image from 'next/image';
import React, { useState } from 'react'

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        '/assets/img1.jpg',
        '/assets/img2.jpg',
        '/assets/img3.jpg',
        '/assets/img4.jpg'
      ];

      const handleDotClick = (index) => {
        setActiveIndex(index);
      };
  return (
    <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                {images.map((_, idx) => (
                <button
                    key={idx}
                    type="button"
                    className={`${idx === activeIndex ? 'bg-primary' : ''} mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                    aria-current="true"
                    aria-label={`Slide ${idx}`}
                    onClick={() => handleDotClick(idx)}
                ></button>
                ))}
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div 
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out"
                style={{ backfaceVisibility: "hidden"}}
            >
                <Image
                    src={images[activeIndex]}
                    alt={`Image ${activeIndex + 1}`}
                    className="block w-full"
                    width={800}
                    height={300}
                />
            </div>       
        </div>
    </div>
  )
}



