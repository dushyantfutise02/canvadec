import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <>
      <style>{`
        .about-page {
          font-family: Inter, sans-serif;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-text {
          line-height: 1.7;
          margin-bottom: 30px;
          color: #111;
        }

        .about-highlight {
          font-size: 22px;
          font-weight: 700;
        }
      `}</style>

      <div className="about-page">
        <div className="about-content">
          <div className="">
            <Title title="About"></Title>
            <p className="about-text text-2xl text-justify mt-2">
              <strong>FUTiSE Technologies Private Limited</strong> is a
              disruptive upcoming tech company dedicated to innovation and
              excellence in the ed-tech domain. Beyond bridging the gap between
              academia and industry, we envision a future where education
              seamlessly integrates with technological advancements. Our mission
              is to empower the next generation with the skills and expertise
              needed to lead and excel in a rapidly evolving world.
            </p>

            <p className="about-highlight text-2xl text-justify">
              Our first offering of EdTech platform <strong>GXXX</strong>, we
              shape the future of technology and equip the next-generation
              workforce.
            </p>
          </div>
        </div>
        
      </div>

      {/* Main Content - Centered and Evenly Spaced */}
      <div className=" mt-7 flex-1 flex flex-col  justify-center space-y-6  mx-auto">
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
    </>
  );
}
