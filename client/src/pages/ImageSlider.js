// src/components/ImageSlider.js
import React, { useState, useEffect } from "react";
import '../styles/images.css'; // Remember to create this file for styling
import image1 from '../Components/Assets/Orphanages.jpg'; // adjust path based on your structure
import image2 from '../Components/Assets/ngo1.jpg';
import image3 from '../Components/Assets/ngo3.avif';
import image4 from '../Components/Assets/ngo2.jpg';
import image5 from '../Components/Assets/ngo3.jpg';
const images = [
 image1,image2,image3,image4,image5
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
