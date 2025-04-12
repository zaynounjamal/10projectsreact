import React from "react";
import "./Price.css";
import Input from "../../components/Input";
const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="price"
          value=""
        />
        <span className="checkmark"></span>All
      </label>
      <Input 
      handleChange={handleChange}
      value={50}
      title="$0-$50"
      name="price"
      />
      <Input 
      handleChange={handleChange}
      value={100}
      title="$0-$100"
      name="price"
      />
      <Input 
      handleChange={handleChange}
      value={150}
      title="$100-$150"
      name="price"
      />
      <Input 
      handleChange={handleChange}
      value={200}
      title="more than $150"
      name="price"
      />

    </div>
  );
};

export default Price;
