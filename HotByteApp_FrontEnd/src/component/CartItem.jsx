import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../store/realUserRedux'

const CartItem = ({ item, cartItems }) => {
    const User = useSelector((state) => state.user.currentUser)
    const [menuItem, setMenuItem] = useState({});
    const realUser=useSelector((state) => state.realUser.currentRealUser)
    const dispatch = useDispatch();
    useEffect(() => {
        const getMenuItem = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/user/menu?id=${item}`, {
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

    const handleAdd = async (menuID) => {
        try {
            const result = await axios.post(`http://localhost:8080/user/add-to-cart?userId=${realUser.userId}&menuItemId=${item}&quantity=1`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${User.jwtToken}`,
                }
            })
        }
        catch (error) {
            console.log(error)
        }
        const fetchCart = async () => {
            try {
              const realUser = await axios.get(`http://localhost:8080/user/${User.username}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${User.jwtToken}`,
                }
              })
              console.log(realUser.data)
              dispatch(addUser(realUser.data));
              
            }
            catch (error) {
              console.log(error)
            }
          }
          fetchCart();
    }
    const handleSubtract = async (menuID) => {
        try {
            const result = await axios.post(`http://localhost:8080/user/remove-from-cart?userId=${realUser.userId}&menuItemId=${item}&quantity=1`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${User.jwtToken}`,
                }
            })
        }
        catch (error) {
            console.log(error)
        }
        const fetchCart = async () => {
            try {
              const realUser = await axios.get(`http://localhost:8080/user/${User.username}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${User.jwtToken}`,
                }
              })
              console.log(realUser.data)
              dispatch(addUser(realUser.data));
              
            }
            catch (error) {
              console.log(error)
            }
          }
          fetchCart();
    }

    console.log(item);
    console.log(cartItems);
    return (
        <div>
            <li
                key={item}
                className="list-group-item d-flex justify-content-between align-menuItems-center"
            >
                <div>
                    {menuItem.menuItemName}{" "}
                    <span
                        className="badge badge-primary badge-pill"
                        style={{ color: "#34d900" }}
                    >
                        ${menuItem.menuItemPrice}
                    </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                        className="btn btn-sm btn-info"
                        style={{
                            fontSize: "1.5rem",
                            width: "25px",
                            height: "35px",
                            margin: "0 10px 0 10px",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={() =>
                            handleSubtract()
                        }
                    >
                        -
                    </button>{" "}
                    {realUser.cart[item]}{" "}
                    <button
                        className="btn btn-sm btn-info"
                        style={{
                            fontSize: "1.5rem",
                            width: "25px",
                            height: "35px",
                            margin: "0 0 0 10px",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={() =>
                            handleAdd()
                        }
                    >
                        +
                    </button>
                </div>
            </li>
        </div>

    )
}

export default CartItem


