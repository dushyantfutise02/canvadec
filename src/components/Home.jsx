import React from "react";
import computer from "../assets/images/computer.png";

const Home = () => {
  return (
    <>
      {" "}
      <section className="flex gap-19">
        <div className="flex flex-col gap-25 justify-center">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-6xl w-[80%] ">Company Profile</h1>
            </div>
            <div
              id="blue_underline"
              className="w-[30%] h-1.5 bg-linear-to-r from-[#11bfff] to-[#844cff]"
            ></div>
          </div>
        </div>

        <div className="relative">
          <div className="mt-8">
            <img src={computer} alt="side_computer" className="size-85" />
          </div>
          <div className="absolute top-3 w-[50%] h-[90%] -right-15 bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(50%_0,100%_0,100%_100%,0_100%)] -z-10"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
