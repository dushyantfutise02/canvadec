import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/fl.png";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg px-7 mb-5 h-20">
      {/* left section */}
      <div className="">
        <img className="w-full h-full rounded-4xl " src={logo} alt="" />
      </div>
      {/* right section  */}
      <div className="flex items-center ">
        <ul className=" flex gap-5 items-center">
          <li>
            <NavLink
              to="/"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/table"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Contents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/innovate"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Innovation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mission"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Mission & Vision
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pillars"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Pillars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/domain"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Domain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-xl font-medium hover:text-[#844cff]"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
