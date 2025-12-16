import React from "react";
import logo from "../assets/images/futise2.jpeg";

const Title = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <div
          id="blue_underline"
          className="w-full h-2 bg-linear-to-r from-[#11bfff] to-[#844cff]"
        ></div>
      </div>
      <div className="w-[10%]">
        <img src={logo} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Title;
