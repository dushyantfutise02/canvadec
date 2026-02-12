import { NavLink } from "react-router-dom";
import logo from "../assets/images/fl.png";

const Header = () => {
  return (
    <div className="flex fixed z-100 bg-white w-full justify-between shadow-lg px-7 mb-5 py-4">
      {/* left section */}
      <img className="w-30 h-10 rounded-4xl place-self-center" src={logo} alt="" />
      {/* right section  */}
      <div className="flex items-center ">
        <ul className=" flex gap-5 items-center">
          <li>
            <NavLink
              to="/"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/table"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Contents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/innovate"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Innovation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mission"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Mission & Vision
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pillars"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Pillars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/why"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Why
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/domain"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Domain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="text-lg font-medium hover:text-[#844cff]"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg font-medium hover:text-[#844cff]"
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
