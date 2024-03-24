import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import { userInstance } from "../requestMethod";
import HotelService from "../services/HotelService";
import PublicService from "../services/PublicService";
import { useSelector } from "react-redux";

const DashboardMenu = () => {
  const hotelID=useSelector(state=>state.hotel.currentHotel.hotelId);
  const [menuList,setMenuList]=useState([])
  useEffect(()=>{
       const fetchMenu= async()=>{
              try{
                    const result=await PublicService.fetchAllMenu(Number(hotelID));
                    setMenuList(result.data)
              }
              catch(error)
              {
                        console.log(error)
              }
       }
       fetchMenu();
  },[])
  return (
    <div>
      <MenuList menuList={menuList}/>
    </div>
  );
};

export default DashboardMenu;
