import React, { useEffect, useState } from "react";
import DashboardSidebar from "../component/DashboardSidebar";
import RestaurantFooter from "../component/RestaurantFooter";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../component/DashboardHeader";
import HotelService from "../services/HotelService";
import { useDispatch, useSelector } from "react-redux";
import { hotelList } from "../store/hotelRedux";
import axios from "axios";
import RestaurantDashboardFooter from "../component/RestaurantDashboardFooter";

const RestaurantDashboard = () => {
  const User=useSelector((state)=>state.user.currentUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log("use effect called")
    const fetchHotels = async () => {
      try {
        let result = await axios.get(`http://localhost:8080/hotel/${User.username}`,{
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${User.jwtToken}`,
          }
        });
        dispatch(hotelList(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchHotels();
  },[])
  return (
    <div style={{ display: "flex" }}>
      <DashboardSidebar />

      <div style={{ width: "100%" }}>
        <DashboardHeader />
        <Outlet />
        <RestaurantDashboardFooter />
      </div>
    </div>
  );
};


export default RestaurantDashboard;

