import React from "react";

const About = () => {
  return (
    <div className="h-screen pt-14 flex flex-col p-5 text-justify">
      <div className="flex justify-center w-[100%] font-bold py-3">
        <h2>Welcome to our online tutoring platform!</h2>
      </div>
      <div className="flex flex-col bg-lime-400 h-full justify-evenly items-center">
        <p className="bg-sky-500 flex-1 p-1">
          We are proud to offer a convenient and effective solution for students
          to receive quality education from the comfort of their own homes. Our
          mission is to provide students with access to expert tutors who can
          help them achieve their academic goals and succeed in their studies.
        </p>
        <p className="flex-1 bg-sky-300  p-1">
          Our web app is specifically designed for tutoring and covers English
          and French. Our tutors are experienced and knowledgeable in their
          respective fields and are dedicated to helping students reach their
          full potential.
        </p>
        <p className="flex-1 bg-sky-100 p-1">
          We are committed to providing quality education to students everywhere
          and believe that our platform is the perfect solution for those
          seeking an alternative to traditional tutoring methods. If you're
          looking to take your education to the next level, we encourage you to
          explore our web app and discover all that it has to offer.
        </p>
      </div>
    </div>
  );
};

export default About;
