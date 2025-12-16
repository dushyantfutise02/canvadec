import React from "react";
import futise_logo from "../assets/images/fl.png";
import computer from "../assets/images/computer.png";

const Home = () => {
  return (
    <>
      {" "}
      <section className="grid grid-cols-2 p-4">
        <div className="flex flex-col gap-25">
          <div className="">
            <img
              src={futise_logo}
              alt="futise_logo"
              className="w-55 h-25"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-6xl w-[80%] ">company profile</h1>
            </div>
            <div
              id="blue_underline"
              className="w-[30%] h-1.5 bg-linear-to-r from-[#11bfff] to-[#844cff]"
            ></div>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <img src={computer} alt="side_computer" className="size-95" />
          </div>
          <div className="absolute top-0 w-[50%] h-[80%] right-0 bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(50%_0,100%_0,100%_100%,0_100%)] -z-10"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
