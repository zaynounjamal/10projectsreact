import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    // Close input if clicked outside of the input or icon
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    } else {
      setBgColor("#1a1a1a");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." autoFocus />
      ) : (
        <FaSearch
          style={{ fontSize: "24px", color: "#1a1a1a", cursor: "pointer" }}
          onClick={() => setShowInput(true)}
        />
      )}
    </section>
  );
}

export default HiddenSearchBar;
