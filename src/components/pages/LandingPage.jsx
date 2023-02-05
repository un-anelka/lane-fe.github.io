import React, { useState, useEffect } from "react";
import image3 from "./../../images/images3.jpg";
import image4 from "./../../images/images4.jpg";
import image5 from "./../../images/images5.jpg";
import image6 from "./../../images/images6.jpg";

import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 3,
      title: "Slide 3",
      image: image3,
    },
    {
      id: 4,
      title: "Slide 4",
      image: image4,
    },
    {
      id: 5,
      title: "Slide 5",
      image: image5,
    },
    {
      id: 6,
      title: "Slide 6",
      image: image6,
    },
  ];

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    };
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const styles = {
    backgroundImage: `url(${slides[currentSlide].image})`,
    animation: "slide-in-right 5s ease-out .5s both",
    // opacity: 0.7,
  };

  return (
    <div
      className="p-3 h-screen pt-14 flex flex-col justify-center items-center bg-cover bg-center "
      style={styles}
    >
      <h1 className="text-3xl m-8 font-extrabold text-sky-500">
        What do you want to learn?
      </h1>
      <h3 className="font-bold text-black">
        From maths tutoring to yoga, Apprentus is the fastest and most effective
        way to connect with high-quality teachers.
      </h3>
      <div className="w-3/4 relative">
        <input
          className="rounded-3xl p-3 w-full  my-10 outline-none h-2/5 "
          type={"text"}
          placeholder={"Search course here"}
          name="search"
        />
        <div className="h-13 w-14 absolute top-1/2 right-3 -translate-y-1/2">
          <Link to={"/courses"} className="h-full">
            <BsSearch className="text-4xl h-2/5 rounded-2xl h-full ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
