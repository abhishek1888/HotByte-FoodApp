import React, { useState } from "react";
import veg from "/Veg_symbol.svg";
import nonveg from "/Non_veg_symbol.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { hotel } from "../store/cartHotel";
import { addUser } from "../store/realUserRedux";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";
import LOGO from "../../public/LOGO.png";

const MenuItem = ({ menu, hotelId }) => {
  const User = useSelector((state) => state.user.currentUser)
  const realUser = useSelector((state) => state.realUser.currentRealUser)
  const hotelCartID = useSelector((state) => state.cart.Hotel)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleAdd = async (menuID) => {
    if (hotelCartID === 0) {
      dispatch(hotel(hotelId))
      try {
        const result = await axios.post(`http://localhost:8080/user/add-to-cart?userId=${realUser.userId}&menuItemId=${menuID}&quantity=1`, {}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${User.jwtToken}`,
          }
        })
        console.log("added to cart")
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
    else {
      if (hotelCartID == hotelId) {
        try {
          const result = await axios.post(`http://localhost:8080/user/add-to-cart?userId=${realUser.userId}&menuItemId=${menuID}&quantity=1`, {}, {
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
      else {
        console.log("orders must be from single hotel")
      }
    }
  }
  return (
    <div>
      <div className="menuitem">
        <div className="menuitem-desc">
          {menu.isVeg === "Yes" ? (<img src={veg} style={{ height: "14px", width: "14px" }} alt="" />) : (<img src={nonveg} style={{ height: "14px", width: "14px" }} alt="" />)}
          <h3 style={{ fontSize: "1.22rem", fontWeight: "500" }}>
            {menu.menuItemName}
          </h3>
          <h6>{menu.menuItemPrice}</h6>
          <p style={{ color: "rgba(40, 44, 63, .45)" }}>
            {menu.menuItemDescription}
          </p>
        </div>
        <div className="menuitem-image">
          <div>
            <img
              alt="Veg Chilli Momo"
              class="menuitem-image"
              loading="lazy"
              width="256"
              //src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21"
              src={menu.menuItemImage}
            />
          </div>
          {User ? (<div className="menuitem-button" onClick={() => { handleAdd(menu.menuItemID) 
            setShow(true) }}>
            ADD
          </div>) : (
            <div className="menuitem-button" >
              <Link to={"/login"}>ADD</Link>
            </div>
          )

          }

        </div>
      </div>
      <hr className="borderClass" />
      <ToastContainer
        position="bottom-end"
        style={{ position: "fixed", margin: "0px 10px 20px 0px" }}
      >
        <Toast
          bg={"dark"}
          onClose={() => setShow(false)}
          show={show}
          delay={7000}
          autohide
        >
          <Toast.Header>
            <img
              src={LOGO}
              className="rounded me-2"
              alt=""
              height="25px"
            />
            <strong className="me-auto">Hotbyte</strong>
            <small>2 sec ago</small>
          </Toast.Header>
          <Toast.Body className={"text-white"} style={{fontSize:"16px"}}>
           Added to cart succesfully
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </div>
  );
};

export default MenuItem;
