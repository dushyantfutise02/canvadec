import React from "react";
import Title from "./Title";
import img from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div className=" flex flex-col gap-5">
      <Title title={"Get in Touch"} />
      <div className="flex">
        <div className="flex flex-col gap-5 place-self-end w-[90%]">
          <div className="flex items-center w-[85%] gap-2 pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)] ">
            <span className="">
              <i className="fa-solid fa-phone text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p className="font-semibold">Phone</p>
              <a href="+91 9742284903">
                <p>+91 9742284903</p>
              </a>
            </div>
          </div>
          <div className="flex items-center w-[80%] gap-2 pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)]">
            <span className="">
              <i className="fa-solid fa-globe text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p className="font-semibold">Website</p>
              <a href="https://www.futise.com" target="_blank">
                <p>www.futise.com</p>
              </a>
            </div>
          </div>
          <div className="flex items-center w-[75%] gap-2 pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,88%_100%,0_100%)]">
            <span>
              <i className="fa-solid fa-location-dot text-3xl"></i>
            </span>
            <div className="flex flex-col">
              <p className="font-semibold">Registered Address</p>
              <p>
                Space 12, The CoWork Spaces, 1st Floor CTS #4882, Site #6, Ward
                #38A, Kalburgi Katwe Identity, Green Garden, Gokul Rd, Hubballi,
                Karnataka 580030
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="h-90 w-100">
            <img src={img} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
