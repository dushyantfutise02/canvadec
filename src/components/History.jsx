import React from "react";
import logo from "../assets/images/futise2.jpeg";

const History = () => {
  return (
    <div className=" bg-white flex flex-col gap-8">
      {/* Gradient Header Box */}
      <div className="flex justify-between sm:pl-10 lg:pl-50">
        <div
          className="px-12 py-8 rounded-lg shadow-lg"
          style={{
            background: "linear-gradient(135deg, #844cff 0%, #11bfff 100%)",
            minWidth: "600px",
          }}
        >
          <h1 className="text-4xl font-bold text-white text-center">
            How It Started
          </h1>
        </div>
        <img src={logo} alt="Futise Logo" className="size-16 " />
      </div>


      {/* Main Content - Centered and Evenly Spaced */}
      <div className="flex-1 flex flex-col  justify-center space-y-6  mx-auto">
        {/* Main Heading */}
        <div className="">
          <h2 className="text-4xl font-bold mb-4">
            60+ Years of Combined Experience
          </h2>
          <div
            className="h-1.5 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #844cff 0%, #11bfff 100%)",
            }}
          ></div>
        </div>

        {/* Body Text - Centered */}
        <div className=" space-y-6 text-gray-800 text-xl leading-relaxed text-left">
          <p>
            It all started over a casual chai break. <strong>4 Experts</strong>{" "}
            from different domains found themselves in a heated discussion. Each
            had spent years solving complex problems in their own domains, but
            they all shared the same frustration: tech learning and upskilling
            was inaccessible to many.
          </p>
          <p>
            What if they brought their expertise together? What if they built
            something bigger than just individual solutions - something that
            truly shaped the future? <strong>Hence, FUTiSE.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
