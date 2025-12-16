import React from "react";
import User from "./User";
import Title from "./Title";
import { data } from "../data.js";
import CategorySection from "./CategorySection.jsx";

const Team = () => {
  return (
    <div className="flex flex-col gap-20 ">
      <CategorySection title="Founders" members={data.founders} />
      <CategorySection title="Advisors" members={data.advisors} />
      <CategorySection title="Our Team" members={data.manager} />
      <CategorySection title="Lead Developer" members={data.leadDeveloper} />
      <CategorySection
        title="Senior Developers"
        members={data.seniorDevelopers}
      />
      <CategorySection title="Developers" members={data.developers} />
      <CategorySection title="Cloud Engineer" members={data.cloudEngineer} />
      <CategorySection title="BRAHMA" members={data.uiUxDeveloper} />
      <CategorySection title="AI / ML Team" members={data.aiMl} />
      <CategorySection title="Hive" members={data.hive} />
    </div>
  );
};

export default Team;
