import React from "react";
import { useSelector } from "react-redux";

const HeadingCity = () => {
  const city=useSelector((state)=>state.city.city);
  return (
    <div className="main-container" style={{ marginBottom: "25px" }}>
      <h2 style={{ fontWeight: "800", fontSize: "24px" }}>
        Restaurants with online food delivery in {city===""?"All Cities":city}
      </h2>
    </div>
  );
};

export default HeadingCity;
