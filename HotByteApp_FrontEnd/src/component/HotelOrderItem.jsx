import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import HotelOrderMenuItem from './HotelOrderMenuItem'
import axios from 'axios'
import { useSelector } from 'react-redux'


const HotelOrderItem = ({ order }) => {

    const [menuItems, setMenuItems] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const User = useSelector((state) => state.user.currentUser);
    const [statusID,setStatusID]= useState(0)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = async (item) => {
        setSelectedItem(item);
        toggleDropdown(); 
        let statusID=0;
        if(item==="Cancelled")
        {
          statusID=5;
        }
        else if(item==="Delivered")
        {
          statusID=4;
        }
        else if(item==="Preparing")
        {
          statusID=2;
        }
      try{
        const result=await axios.put(`http://localhost:8080/hotel/orders/update?orderId=${order.orderID}&statusId=${statusID}`,{},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${User.jwtToken}`,
              }
        })
      }
      catch(error)
      {
         consolele.log(error)
      }
      
    }

    useEffect(() => {
        setMenuItems(order.orderItems);
    }, [])

    const keys = Object.keys(menuItems)

    return (
        <div style={{ padding: "0px 10px", border: "2px solid #843de6" }}>
            <div style={{ display: "flex" }}>
                <div className="col-5" >
                    <Card style={{ border: '2px solid #ccc', borderRadius: '10px' }}>
                        <Card.Body>
                            <Card.Title>{{ ...order.hotelID }.hotelName}</Card.Title>
                            <Card.Text><strong>OrderId:</strong> {order.orderID}</Card.Text>
                            <Card.Text><strong>UserID:</strong> {{ ...order.userID }.userId}</Card.Text>
                            <Card.Text><strong>Total:</strong> {order.amount}</Card.Text>
                            <Card.Text><strong>OrderTime:</strong> {order.orderTime}</Card.Text>
                            <Card.Text><strong>DeliveryTime:</strong> {order.deliveryTime}</Card.Text>
                            <Card.Text><strong>OrderStatus:</strong> {order.orderStatusID}</Card.Text>
                            <Card.Text><strong>Note:</strong> {order.note}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-7">
                    {keys.map((item) => (
                        <HotelOrderMenuItem item={item} />

                    ))}
                </div>
            </div>


    <div class="dropup">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          {selectedItem ? selectedItem : "Select Status"}
        </button>
        {isOpen && (
          <ul
            class="dropdown-menu dropdown-menu-dark"
            style={{ display: 'block', position: 'absolute', bottom: '100%', left: '0' }}
          >
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => handleItemClick("")}
              >
                Select status
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => handleItemClick("Preparing")}
              >
                Preparing
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => handleItemClick("Delivered")}
              >
                Delivered
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                onClick={() => handleItemClick("Cancelled")}
              >
                Cancelled
              </a>
            </li>
          </ul>
        )}
      </div>

        </div>
    )
}

export default HotelOrderItem