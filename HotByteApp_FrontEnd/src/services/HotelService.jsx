import React from 'react'
import axios from "axios";
import { userInstance } from "../requestMethod";


class HotelService {
    getHotelByUsername(username) {
        return userInstance.get(`/hotel/${username}`);
     }
     createMenuItem(data)
     {
         return userInstance.post("/hotel/add-menuitem",data)
     }
    
}

export default new HotelService();



