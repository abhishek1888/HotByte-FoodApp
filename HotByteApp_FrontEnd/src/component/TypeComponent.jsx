import React from "react";
import data from "../../src/Data";
import { Link } from "react-router-dom";

const TypeComponent = ({ item }) => {
  return (
    <div style={{ padding: "0 15px" }}>
      <div>
        <Link to={`/collections/${item.name}`}>
          <div height="180" width="144" class="sc-jdUcAg kqrLwl">
            <img
              class="sc-kAyceB eDtXYp"
              src={item.image}
              height="180"
              alt={item.alttext}
            />
          </div>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default TypeComponent;
