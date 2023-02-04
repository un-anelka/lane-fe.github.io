import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/lane-logo.PNG";
import Button from "../buttons/Button";
import { navitems } from "./navitems";
const Navbar = () => {
  return (
    <div className="bg-[#096da3] h-14 fixed w-screen z-10 flex justify-around ">
      <Link to={"/"} className="flex-[0.25]  h-full">
        <img
          src={logo}
          alt="Logo is required"
          className="h-full ml-4 rounded-lg"
        />
      </Link>
      <ul className="flex-[1.5] flex justify-around items-center w-full text-white">
        {navitems.map((items, index) => {
          return (
            <li key={index}>
              <Link to={items.path} className=" m-0.5 hover:bg-[#f7a006] p-2">
                {items.label}
              </Link>
            </li>
          );
        })}
        <Button>Login</Button>
      </ul>
    </div>
  );
};

export default Navbar;
