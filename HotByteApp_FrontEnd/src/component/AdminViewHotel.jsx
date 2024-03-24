import React, { useEffect, useState } from "react";
import FiltersContainer from "./FiltersContainer";
import HotelCard from "./HotelCard";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminViewHotel = () => {
  const User = useSelector((state) => state.user.currentUser)
  const [hotels,setHotels]=useState([]);

  useEffect(()=>{
    const fetchHotels = async () => {
      try {
        let result = await axios.get("http://localhost:8080/admin/all-hotel",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${User.jwtToken}`,
              }
        });
        console.log(result.data);
        setHotels(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  },[]);

  return (
    <div className="main-container">
     
      <div className="row row-cols-lg-3 row-cols-xxl-4 row-cols-sm-2 row-cols-1" style={{ gap: "30px" }}>
           {
             hotels.map((hotel)=>(
              <HotelCard {...hotel} key={hotel.hotelId}/>
              ))
              
           }
      </div>
    </div>
  );
};

export default AdminViewHotel;