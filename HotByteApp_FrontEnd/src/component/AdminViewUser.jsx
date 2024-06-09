import React, { useEffect, useState } from "react";
import FiltersContainer from "./FiltersContainer";

import { useSelector } from "react-redux";

import axios from "axios";
import UserCard from "./UserCard";

const AdminViewUser = () => {
  const User = useSelector((state) => state.user.currentUser)
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    const fetchUsers = async () => {
      try {
        let result = await axios.get("http://localhost:8080/admin/all-user",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${User.jwtToken}`,
              }
        });
        console.log(result.data);
        setUsers(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  },[]);

  return (
    <div className="main-container">
      
      <div className="row row-cols-lg-3 row-cols-xxl-4 row-cols-sm-2 row-cols-1 mb-5" style={{ gap: "50px" }}>
           {
             users.map((user)=>(
              <UserCard {...user} key={user.userId}/>
              ))
              
           }
      </div>
    </div>
  );
};

export default AdminViewUser;