import React from "react";
import Title from "./Title";

const Pillars = () => {
  return (
    <div>
      <div className="">
        <Title title="IV FUTiSE Pillars"></Title>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center w-[85%] gap-8  pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)] ">
          <div className="text-2xl font-semibold">I</div>
          <div className="text-xl font-medium min-w-32">Innovation</div>
          <div className="">
            Creativity and forward-thinking that drives progress, and new
            solutions to address industry challenges
          </div>
        </div>
        <div className="flex items-center w-[80%] gap-8 pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)]">
          <div className="text-2xl font-semibold">II</div>
          <div className="text-xl font-medium min-w-31">Collaboration</div>
          <div className="text">
            Ethical practices, transparency, and accountability in all our
            actions, building trust with stakeholders.
          </div>
        </div>
        <div className="flex items-center w-[76%] gap-8  pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,94%_100%,0_100%)]">
          <div className="text-2xl font-semibold">III</div>
          <div className="text-xl font-medium min-w-30">Integrity</div>
          <div className="text">
            Partnerships with academia, industry & the community with diverse
            perspectives & common goals enabling teamwork.
          </div>
        </div>
        <div className="flex items-center w-[71%] gap-8  pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,93%_100%,0_100%)]">
          <div className="text-2xl font-semibold">IV</div>
          <div className="text-xl font-medium min-w-30">Sustainability</div>
          <div className="">
            Responsible growth & green practices for the environment and
            contributing to a healthier planet for the next gen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
