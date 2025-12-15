import React from "react";
import Title from "./Title";
import img from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div className="px-20 flex flex-col gap-5">
      <Title title={"Get in Touch"} />
      <div className="flex justify-between px-10">
        <div className="flex flex-col gap-5 place-self-end">
          <div className="flex items-center gap-2 pl-5 pr-30 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)] -skew-x-10 ">
            <span className="">
              <i class="fa-solid fa-phone text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p>Phone</p>
              <p>+91 9742284903</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-5 pr-30 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)] -skew-x-10">
            <span className="">
              <i className="fa-solid fa-globe text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p>Website</p>
              <p>www.futise.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-5 pr-30 py-2 text-white bg-[linear-gradient(135deg,#844cff,#11bfff)] -skew-x-10">
            <span>
              <i class="fa-solid fa-location-dot text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p>Registered Address</p>
              <p>Hubli, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img} alt="" className="w-90 h-70" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
