import React from "react";
import User from "./User";
import Title from "./Title";
import img from "../assets/user/dk.png";
import { data } from "../data.ts";

const Team = () => {
  const { name, designation, image } = data.founders[0];
  return (
    <div className="flex flex-col gap-5 ">
      {/* header  */}
      <Title title="Our Team" />
      {data.founders.map((user) => {
        <div key={user.id} className="grid grid-cols-2 gap-30 items-center place-self-center" >

          <User name={user.name} desc={user.designation} img={user.image} />
        </div>;
      })}
    </div>
  );
};

export default Team;
