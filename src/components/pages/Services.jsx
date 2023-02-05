import React, { useState, useEffect } from "react";

const Services = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1200x600/25c29b/000000",
    "https://via.placeholder.com/1200x600/0b1b8f/333333",
    "https://via.placeholder.com/1200x600/c9126b/666666",
    "https://via.placeholder.com/1200x600/f0f0f0/999999",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-64">
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === i ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Services;
