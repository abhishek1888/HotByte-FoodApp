import React from "react";
import LOGO from "/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout as userlogout} from "../store/userRedux";
import {logout} from "../store/hotelRedux"
const DashboardHeader = () => {
  const User=useSelector((state)=>state.user.currentUser)
  const dispatch=useDispatch()
  const navigate=useNavigate("/")
  const handleLogout=()=>{
         dispatch(userlogout());
         dispatch(logout());
         navigate("/");
  }
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <h2 style={{width:"30%"}}>{User.username}</h2>
        <div style={{width:"50%"}}>
        <div > 
             <button className="btn btn-primary" onClick={handleLogout}>Logout</button>                
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
