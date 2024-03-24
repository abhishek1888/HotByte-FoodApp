import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const HotelOrderMenuItem = ({item}) => {
    const User = useSelector((state) => state.user.currentUser)
    const [menuItem, setMenuItem] = useState({});
    // const realUser=useSelector((state) => state.realUser.currentRealUser)
    const hotel=useSelector((state)=>state.hotel.currentHotel);
    useEffect(() => {
        const getMenuItem = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/hotel/menu?id=${item}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${User.jwtToken}`,
                    }
                })
                console.log(result.data);
                setMenuItem(result.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getMenuItem();
    }, [])
  return (
    
        <Card style={{ border: '2px solid #ccc', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title><strong>Item Name:</strong> {menuItem.menuItemName}</Card.Title>
          <Card.Text><strong>Item Price:</strong> {menuItem.menuItemPrice}</Card.Text>
          <Card.Text><strong>Item Rating:</strong> {menuItem.menuItemRating}</Card.Text>
          <Card.Text><strong>Item is veg:</strong>{menuItem.isVeg}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default HotelOrderMenuItem