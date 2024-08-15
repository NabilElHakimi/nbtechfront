import React, { useState, useEffect } from "react";


const images = [
  "https://ecommerce.datablitz.com.ph/cdn/shop/files/Pro-X60-sliding_1800x.jpg?v=1717915095",
  "https://ecommerce.datablitz.com.ph/cdn/shop/files/swift-go-14ecom-slide_1800x.jpg?v=1718766980",
  "https://ecommerce.datablitz.com.ph/cdn/shop/files/poweredbyasus-slidingv2_1200x.jpg?v=1722502739"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalImages]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-md">
      <div className="relative flex transition-transform duration- 700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={src} alt={`Carousel Item ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
