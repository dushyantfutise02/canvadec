import React from "react";
import logo from "../assets/images/futise2.jpeg"

const Title = ({title}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <img src={logo} alt="" className="size-15"/>
    </div>
  );
};

export default Title;
