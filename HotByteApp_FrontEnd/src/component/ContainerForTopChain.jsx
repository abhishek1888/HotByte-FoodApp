import React, { useEffect, useState } from "react";
import TypeComponent from "./TypeComponent";
import data from "../../src/Data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import HotelCard from "./HotelCard";
import PublicService from "../services/PublicService";
import { useSelector } from "react-redux";
import axios from "axios";

const ContainerForTopChain = () => {
  const [Hotels, setHotels] = useState([]);
  const city = useSelector((state) => state.city.city);
  const handleLeftClick = () => {
    const container = document.getElementById("topchainContainer");
    if (container) {
      container.scrollLeft -= 100; // Adjust the scroll distance as needed
    }
  };
  const handleRightClick = () => {
    const container = document.getElementById("topchainContainer");
    if (container) {
      container.scrollLeft += 100; // Adjust the scroll distance as needed
    }
  };
  useEffect(() => {
    const fetchHotels = async () => {
      if (city === "All Cities") {
        try {
          let result = await PublicService.getAllHotels();
          setHotels(result.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          let result = await axios.get(`http://localhost:8080/home/all-hotel/bycity?query=${city}`);
          setHotels(result.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchHotels();
  }, [city]);
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
              <h2>Top restaurant chains in {city===""?"All Cities":city}</h2>
            </div>
            <div
              id="topchainContainer"
              style={{
                overflowX: "auto",
                marginLeft: "6px",
                marginRight: "-4px",
                marginBottom: "-34px",
                display: "flex",
              }}
            >
              {Hotels.map((hotel) => (
                <HotelCard {...hotel} key={hotel.hotelId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForTopChain;
