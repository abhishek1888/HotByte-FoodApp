import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import OrderMenuItem from './OrderMenuItem'

const OrderItem = ({order}) => {

  const [menuItems,setMenuItems]=useState({})
  useEffect(()=>{
    setMenuItems(order.orderItems);
  },[])
  const keys=Object.keys(menuItems)
  return (
    <div style={{padding:"0px 10px",border: "2px solid #843de6"}}>
      <div style={{display:"flex"}}>
        <div className="col-5" >
        <Card>
        <Card.Body>
          <Card.Title>{{...order.hotelID}.hotelName}</Card.Title>
          <Card.Text>Total: {order.amount}</Card.Text>
          <Card.Text>OrderTime: {order.orderTime}</Card.Text>
          <Card.Text>DeliveryTime: {order.deliveryTime}</Card.Text>
          <Card.Text>OrderStatus: {order.orderStatusID}</Card.Text>
        </Card.Body>
      </Card>
        </div>
        <div className="col-7">
        {keys.map((item) => (
              <OrderMenuItem item={item} />
              ))}
        </div>
      </div>
    </div>
  )
}

export default OrderItem
