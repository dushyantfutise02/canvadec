import React from "react";
import Title from "./Title";

const MissionVision = () => {
  return (
    <div className="p-10 flex flex-col">
      {/* Mission Section */}
      <div className="">
        <Title title={"Mission"} />
        <p className="text-lg leading-relaxed text-gray-800 max-w-4xl mt-3">
          At FUTiSE, we are driven by a mission to integrate technology,
          creativity, and expertise to combine traditional learning and evolving
          industry demands. Through innovative solutions and transformative
          experiences, we empower individuals and organizations to adapt, grow,
          and lead in an ever-changing world.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mt-8">
        <div className="relative">
          <h1 className="text-4xl font-bold ">Vision</h1>
          <div
            id="blue_underline"
            className="w-30 h-1.5 bg-linear-to-r from-[#11bfff] to-[#844cff]"
          ></div>
        </div>
        <p className="text-lg leading-relaxed text-gray-800 max-w-4xl mt-2">
          We envision a world where knowledge is boundless - accessible to every
          aspiring learner, transcending geographical barriers. FUTiSE is
          committed to building a future where learning and innovation go hand
          in hand.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
