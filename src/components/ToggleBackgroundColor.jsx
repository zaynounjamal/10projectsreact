import React, { useState } from "react";
import "../App.css";

function ToggleBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonBgColor, setButtonBgColor] = useState("white");

  function handleClick() {
    const isLight = backgroundColor === "white";
    setBackgroundColor(isLight ? "#1b1b1b" : "white");
    setTextColor(isLight ? "#ffa31a" : "#1b1b1b");
    setButtonBgColor(isLight ? "#1b1b1b" : "white");
  }

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonBgColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}

export default ToggleBackgroundColor;
