import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
import { useSelector } from 'react-redux'
import axios from 'axios'

const OrderList = () => {
  const realUser = useSelector((state) => state.realUser.currentRealUser)
  const User = useSelector((state) => state.user.currentUser)
  const [orders,setOrders]= useState([])
  useEffect(()=>{
    const fetchOrders= async()=>{
        try{
            const result= await axios.get(`http://localhost:8080/user/orders?userId=${realUser.userId}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${User.jwtToken}`,
                  } 
            })
            console.log(result.data);
            setOrders(result.data);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    fetchOrders();
  },[])
  return (
    <div style={{width:"100%"}}>
         {orders.map((order)=>(
           <OrderItem order={order}/>
         ))}
    </div>
  )
}

export default OrderList
