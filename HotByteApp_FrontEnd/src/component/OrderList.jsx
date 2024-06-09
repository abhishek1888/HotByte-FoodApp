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
         {
              orders.length===0?(
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  color: '#843de6',
                  fontSize: '25px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  border:"5px solid black"
                }}>
                    <p>No Orders </p>
                    <img src="https://cdn2.iconfinder.com/data/icons/food-delivery-wildberry-vol-2/256/Not_Taking_Orders-512.png" alt="No orders" style={{ width: '500px', marginTop: '20px' }} />
                </div>
              ):(
                orders.map((order)=>(
                    <OrderItem order={order}/>
              ))
            )
         }
    </div>
  )
}

export default OrderList
