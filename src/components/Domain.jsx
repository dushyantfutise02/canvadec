import React from "react";
import Title from "./Title";

const Domain = () => {
  return (
    <div>
      <div className="">
        <Title title="Domains of Expertise"></Title>
      </div>
      <div className="flex">
        <div className="w-[20%] relative">
          <div className="absolute bottom-0 w-[80%] h-full bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,50%_100%,0_100%)]"></div>
        </div>
        <div style={styles.grid} className="p-25 text-3xl">
          <div style={styles.column}>
            <p>1&nbsp;&nbsp;AI & ML</p>
            <p>2&nbsp;&nbsp;Data Science </p>
            <p>3&nbsp;&nbsp;VLSI & Semiconductor</p>
            <p>3&nbsp;&nbsp;Cloud Computing</p>
          </div>

          <div style={styles.column}>
            <p>5&nbsp;&nbsp;Cybersecurity</p>
            <p>6&nbsp;&nbsp;Embedded Systems</p>
            <p>7&nbsp;&nbsp;Automotive Design & EV</p>
            <p>8&nbsp;&nbsp;IoT (Internet of Things)</p>
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
