import React from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import HotelList from "../component/HotelList";
import data from "../Data";
const Collection = () => {
  let { name } = useParams();
  return (
    <>
      <Header />
      <div className="mainpage">
        <div className="main-container">
          <div>
            <div
              style={{
                color: "#282c3f",
                padding: "60px 8px 16px",
                maxWidth: "1260px",
                minWidth: "1260px",
              }}
            >
              <div style={{ fontSize: "40px", fontWeight: "600" }}>{name}</div>
              <div
                style={{
                  fontSize: "18px",
                  opacity: ".9",
                  marginTop: "8px",
                  maxWidth: "800px",
                }}
              >
                Welcome here
              </div>
            </div>
          </div>
        </div>
        <div>
          <HotelList />
        </div>
      </div>
    </>
  );
};

export default Collection;
