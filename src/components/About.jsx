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
          <div className="p-12">
            <Title title="About"></Title>
            <p className="about-text text-3xl text-justify">
              <strong>FUTiSE Technologies Private Limited</strong> is a
              disruptive upcoming tech company dedicated to innovation and
              excellence in the ed-tech domain. Beyond bridging the gap between
              academia and industry, we envision a future where education
              seamlessly integrates with technological advancements. Our mission
              is to empower the next generation with the skills and expertise
              needed to lead and excel in a rapidly evolving world.
            </p>

            <p className="about-highlight text-3xl text-justify">
              Our first offering of ed-tech platform <strong>GENi</strong>, we
              shape the future of technology and equip the next-generation
              workforce.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
