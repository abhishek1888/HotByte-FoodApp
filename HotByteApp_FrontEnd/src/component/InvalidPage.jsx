import React from "react";
import { Link } from "react-router-dom";
import Error from "/Error.jpeg"
export const InvalidPage = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: "calc(100vh - 229px)",
        display: "flex",
        WebkitBoxAlign: "center",
        msFlexAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        msFlexPack: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "430px",
          lineHeight: "1.25",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            backgroundImage:{Error},
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            height: "260px",
          }}
        >
            <img src={Error} style={{ height: "100%", width: "100%" }}/>
        </div>
        <div
          style={{
            color: "#282c3f",
            fontSize: "32px",
            fontWeight: "600",
            margin: "35px 0 14px",
          }}
        >
          We'll be back shortly
        </div>
        <div
          style={{
            color: "#686b78",
            fontSize: "16px",
          }}
        >
          We are fixing a temporary glitch. Sorry for the inconvenience.
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-block",
              textAlign: "center",
              border: "none",
              letterSpacing: "0",
              color: "#fff",
              backgroundColor: "#fc8019",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.12)",
              height: "40px",
              lineHeight: "40px",
              padding: "0 20px",
              width: "auto",
              marginTop: "25px",
              fontSize: "15px",
              fontWeight: "600",
              outline: "none",
            }}
          >
            Go Back
          </button>
        </Link>
      </div>
        
    </div>
  );
};