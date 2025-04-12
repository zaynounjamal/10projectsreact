import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
const Colors = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="test1"
          value=""
        />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="sidebar-label-container">
        <input type="radio" name="test1" onChange={handleChange} value="white"/>
        <span className="checkmark" style={{ backgroundColor: "white", border: "1px solid black" }}></span>White
      </label>
    </div>
  );
};

export default Colors;
