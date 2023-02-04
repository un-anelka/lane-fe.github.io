import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen pt-14">
      <h2>Oops! this page does not exist</h2>
      <Link to={"/"}> Go back Home</Link>
    </div>
  );
};

export default NotFound;
