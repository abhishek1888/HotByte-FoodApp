import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({menuList,hotelId}) => {
  return (
    <div>
      { 
        menuList.map((menu)=>(
            <MenuItem menu={menu} hotelId={hotelId}/>
        ))
     }
    </div>
  );
};

export default MenuList;
