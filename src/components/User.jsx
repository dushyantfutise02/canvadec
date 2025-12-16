import React from "react";

import { NavLink } from "react-router-dom";
import linkImg from "../assets/images/LinkImg.webp"

const User = ({name,desc,img,link}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <NavLink to={link} className="">
          <img src={linkImg} alt="" className="size-5 absolute right-0"/>
        </NavLink>
        <img src={img} alt="" className="h-40 rounded " />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white bg-[#7060FF] rounded-2xl px-5 py-1 font-semibold text-xl">
          {name}
        </p>
        <p className="font-medium px-15 text-center">{desc}</p>
      </div>
    </div>
  );
};

export default User;
