import React from "react";
import Title from "./Title";

const Domain = () => {
  return (
    <div>
      <div className="">
        <Title title="Domains of Expertise"></Title>
      </div>
      <div className="relative">
        <div className="absolute w-25 h-70 -left-30 top-20 bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,50%_100%,0_100%)]"></div>
      </div>
      <div className="flex">
        <div style={styles.grid} className="p-2 text-3xl">
          <div style={styles.column}>
            <p>1&nbsp;&nbsp; VLSI, Semiconductor and Embeded</p>
            <p>2&nbsp;&nbsp; AI & ML</p>
            <p>3&nbsp;&nbsp; Cyber Security</p>
            <p>4&nbsp;&nbsp;Cloud Computing </p>
          </div>

          <div style={styles.column}>
            <p>5&nbsp;&nbsp;Automotive Designs and EV and IoT</p>
            <p>6&nbsp;&nbsp;Deep Tech </p>
            <p>7&nbsp;&nbsp;Quantum Computing</p>
            <p>8&nbsp;&nbsp;Data Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Inter, Arial, sans-serif",
    backgroundColor: "#ffffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: "180px", // wide spacing like Canva
  },
  column: {
    display: "grid",
    rowGap: "20px",
    fontSize: "22px", // BIG content text
    fontWeight: "400",
    lineHeight: "1.8",
    color: "#000",
  },
};

export default Domain;
