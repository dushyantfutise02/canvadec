import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <h1 className="text-xl font-bold">
          Instructional Designer Intern (EdTech) - 90 Days
        </h1>
        <ul className="list-disc pl-7 py-2">
          <li>
            <span className="font-semibold">Company:</span> FUTiSE Technologies
          </li>
          <li>
            <span className="font-semibold">Location:</span> Remote / Hybrid
            (India)
          </li>
          <li>
            <span className="font-semibold">Duration:</span> 90 Days
          </li>
          <li>
            <span className="font-semibold">Start Date:</span> Immediate / As
            per availability
          </li>
          <li>
            <span className="font-semibold">Stipend:</span> Performance-based
            (post internship review)
          </li>
          <li>
            <span className="font-semibold">Certification:</span> Certificate of
            Completion
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">About FUTiSE Technologies</h1>
        <p className="p-2">
          FUTiSE Technologies is an emerging EdTech startup focused on building
          outcome-driven, scalable, and engaging digital learning solutions. We
          combine pedagogy, technology, and content innovation to deliver
          impactful learning experiences aligned with modern learner and
          business needs.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-bold">Internship Overview</h1>
        <p className="p-2">
          We are seeking a motivated Instructional Designer Intern to support
          the design and development of high-quality digital learning content.
          This internship provides hands-on exposure to real-world EdTech
          projects, collaboration with cross-functional teams, and practical
          experience in instructional design best practices. This role is ideal
          for candidates passionate about learning design, content structuring,
          and digital education.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-bold">Key Responsibilities</h1>
        <ul className="list-disc pl-7 py-2">
          <li>
            Assist in designing learning journeys, course outlines, and learning
            objectives
          </li>
          <li>Develop storyboards, scripts, and structured learning flows</li>
          <li>Convert complex concepts into clear, learner-friendly content</li>
          <li>
            Support development of interactive eLearning modules and assessments
          </li>
          <li>
            Assist with multimedia content including videos, animations, and
            voiceovers
          </li>
          <li>
            Perform content reviews, quality checks, and continuous improvements
          </li>
          <li>
            Ensure alignment with branding, instructional standards, and
            documentation practices
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">Skills & Requirements</h1>
        <ul className="list-disc pl-7 py-2">
          <li>Strong interest in instructional design and eLearning</li>
          <li>Good written and verbal communication skills</li>
          <li>
            Basic knowledge of instructional models (ADDIE, Bloom's Taxonomy -
            preferred)
          </li>
          <li>
            Familiarity with tools like Articulate 360, Canva, PowerPoint, or
            Google Slides
          </li>
          <li>Attention to detail, content flow, and quality standards</li>
          <li>Ability to manage tasks independently and meet deadlines</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">What You'll Gain</h1>
        <ul className="list-disc pl-7 py-2">
          <li>Hands-on experience in EdTech learning projects</li>
          <li>
            Exposure to professional instructional design workflows and tools
          </li>
          <li>
            Opportunity to build a strong portfolio (modules, scripts,
            storyboards)
          </li>
          <li>
            Collaboration experience with SMEs, product, and content teams
          </li>
          <li>
            Solid foundation in digital learning development best practices
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">Performance Review & Stipend</h1>
        <ul className="list-disc pl-7 py-2">
          <li>90-day internship engagement</li>
          <li>Certificate issued upon successful completion</li>
          <li>
            Stipend opportunity offered post internship based on performance,
            quality of work, ownership, and contribution
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-bold">How to Apply</h1>
        <p>
          Interested candidates can share their resume, portfolio (if
          available), and a short note explaining their interest in FUTiSE
          Technologies.
        </p>
        <div className="">
          <Link
            className="cursor-pointer hover:text-blue-600"
            to="manojlewis@futise.com"
          >
            &#9993; manojlewis@futise.com
          </Link>
          <p>&#128222; +91 97422 84903</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
