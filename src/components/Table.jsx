import React from "react";
import Title from "./Title";

const Table = () => {
  return (
    <div style={styles.container}>
      <div className="pl-12 pr-12">
        <Title title="Table of Contents"></Title>
      </div>
      <div className="flex">
        <div className="w-[20%] relative">
          <div className="absolute bottom-0 w-[80%] h-full left-12 bg-linear-to-r from-[#11bfff] to-[#844cff] [clip-path:polygon(0%_0,100%_0,50%_100%,0_100%)]"></div>
        </div>
        <div style={styles.grid} className="p-30 text-3xl">
          <div style={styles.column}>
            <p>1&nbsp;&nbsp;About FUTiSE</p>
            <p>2&nbsp;&nbsp;Mission | Vision</p>
            <p>3&nbsp;&nbsp;Core Values</p>
          </div>

          <div style={styles.column}>
            <p>4&nbsp;&nbsp;Why FUTiSE?</p>
            <p>5&nbsp;&nbsp;Our USP</p>
            <p>6&nbsp;&nbsp;Domains of Expertise</p>
          </div>

          <div style={styles.column}>
            <p>7&nbsp;&nbsp;How It Started</p>
            <p>8&nbsp;&nbsp;Get In Touch</p>
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
    gridTemplateColumns: "repeat(3, 1fr)",
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

export default Table;
