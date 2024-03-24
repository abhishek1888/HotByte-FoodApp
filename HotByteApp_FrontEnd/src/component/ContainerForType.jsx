import React from "react";
import TypeComponent from "./TypeComponent";
import data from "../../src/Data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const ContainerForType = () => {
  const handleLeftClick = () => {
    const container = document.getElementById("topTpeContainer");
    if (container) {
      container.scrollLeft -= 100; 
    }
  };
  const handleRightClick = () => {
    const container = document.getElementById("topTpeContainer");
    if (container) {
      container.scrollLeft += 100; 
    }
  };
  return (
    <div className="main-container">
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            marginTop: "12px",
            right: "16px",
          }}
        >
          <button
           onClick={handleLeftClick}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              display: " inline",
              marginRight: "10px",
              padding: "0px",
            }}
          >
            <div
              style={{
                borderRadius: "100%",
                height: "34px",
                padding: "4px 8px 4px",
                background: " rgb(226, 226, 231)",
              }}
            >
              <FaArrowLeft />
            </div>
          </button>
          <button
           onClick={handleRightClick}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              display: " inline",
              margin: "0px",
              padding: "0px",
            }}
          >
            <div
              style={{
                borderRadius: "100%",
                height: "34px",
                padding: "4px 8px 4px",
                background: " rgb(226, 226, 231)",
              }}
            >
              <FaArrowRight />
            </div>
          </button>
        </div>
        <div>
          <div
            style={{
              background: "rgb(255, 255, 255)",
              padding: "16px",
              overflow: "hidden",
            }}
          >
            <div style={{ marginBottom: "16px", display: "flex" }}>
              <h2>What's on your mind?</h2>
            </div>
            <div
              id="topTpeContainer"
              style={{
                overflow: "scroll hidden",
                marginLeft: "-16px",
                marginRight: "-4px",
                marginBottom: "-34px",
                display: "flex",
              }}
            >
              {data.type.map((item) => (
                <TypeComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForType;
