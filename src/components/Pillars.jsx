import React from "react";
import Title from "./Title";

const Pillars = () => {
  return (
    <div>
      <div className="">
        <Title title="IV FUTiSE Pillars"></Title>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center w-[80%] gap-8 text-2xl pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)] ">
          <div>I</div>
          <div>Innovation</div>
          <div>
            Creativity and forward-thinking that drives progress, and new
            solutions to address industry challenges
          </div>
        </div>
        <div className="flex items-center w-[75%] gap-8 text-2xl pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,95%_100%,0_100%)]">
          <div>II</div>
          <div>Collaboration</div>
          <div>
            Ethical practices, transparency, and accountability in all our
            actions, building trust with stakeholders.
          </div>
        </div>
        <div className="flex items-center w-[71%] gap-8 text-2xl pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,94%_100%,0_100%)]">
          <div>III</div>
          <div>Integrity</div>
          <div>
            Partnerships with academia, industry & the community with diverse
            perspectives & common goals enabling teamwork.
          </div>
        </div>
        <div className="flex items-center w-[66%] gap-8 text-2xl pl-5 pr-30 py-2 text-white bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,93%_100%,0_100%)]">
          <div>IV</div>
          <div>Sustainability</div>
          <div>
            Responsible growth & green practices for the environment and
            contributing to a healthier planet for the next gen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
