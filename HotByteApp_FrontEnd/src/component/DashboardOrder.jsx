import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import HotelOrderItem from "./HotelOrderItem";

const DashboardOrder = () => {
  const User = useSelector((state) => state.user.currentUser)
  const hotel=useSelector((state)=>state.hotel.currentHotel);
  const [orderList,setOrderList]=useState([])
  useEffect(()=>{
       const fetchHotelOrders=async()=>{
           try{
                 const result= await axios.get(`http://localhost:8080/hotel/orders?hotelId=${hotel.hotelId}`,{
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${User.jwtToken}`,
                  }
                 })
                 console.log(result.data)
                 setOrderList(result.data)
           }
           catch(error)
           {
            console.log(error)
           }
       }
       fetchHotelOrders();
  },[])
  return (
  <div>
        {
          orderList.map((order)=>(
            <HotelOrderItem order={order}/>
          ))
        }
  </div>

  )
};

export default DashboardOrder;
