import React from "react";
import logo from "../assets/images/futise2.jpeg";

const MissionVision = () => {
  return (
    <div className="px-20 py-10 bg-gray-50 flex flex-col">
      {/* Logo in top right */}
      <div className="flex justify-end mb-8">
        <img src={logo} alt="Futise Logo" className="size-16" />
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-2">Mission</h1>
        <div className="h-1 w-32 bg-blue-600 mb-6"></div>
        <p className="text-lg leading-relaxed text-gray-800 max-w-4xl">
          At FUTiSE, we are driven by a mission to integrate technology,
          creativity, and expertise to combine traditional learning and evolving
          industry demands. Through innovative solutions and transformative
          experiences, we empower individuals and organizations to adapt, grow,
          and lead in an ever-changing world.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2">Vision</h1>
        <div className="h-1 w-32 bg-blue-600 mb-6"></div>
        <p className="text-lg leading-relaxed text-gray-800 max-w-4xl">
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
