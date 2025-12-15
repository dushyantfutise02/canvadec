import React from "react";

const Table = () => {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
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
  );
};

const styles = {
  container: {
    padding: "100px 120px",   // Canva-like white space
    fontFamily: "Inter, Arial, sans-serif",
    backgroundColor: "#ffffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "180px",       // wide spacing like Canva
  },
  column: {
    display: "grid",
    rowGap: "20px",
    fontSize: "22px",         // BIG content text
    fontWeight: "400",
    lineHeight: "1.8",
    color: "#000",
  },
};

export default Table;
