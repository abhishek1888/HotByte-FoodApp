import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LOGO from "/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser} from "../store/realUserRedux";
import CartItem from "../component/CartItem";
import {logout} from "../store/cartHotel"

const Cart = () => {
  const User = useSelector((state) => state.user.currentUser)
  const realUser = useSelector((state) => state.realUser.currentRealUser)
  const hotelCartID = useSelector((state) => state.cart.Hotel)
  const dispatch = useDispatch()
  let cartItem = realUser?realUser.cart:{};
  const navigate=useNavigate()

  
  const [cartItems, setCartItems] = useState(cartItem);
  const [note,setNote]=useState("");
  const keys = Object.keys(cartItems);
  console.log(keys)

  useEffect(() => {
    if (!User) {
      // If user is not logged in, navigate to the login page
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    // Check if cart is empty and dispatch logout if true
    if (Object.keys(cartItem).length === 0) {
      dispatch(logout());
    }
  }, [cartItem]);

  useEffect(() => {
    if (User) {
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
  }, [])

  const placeOrder=async ()=>{
      try{
          const result= await axios.post(`http://localhost:8080/user/create-order`,
            {
              user: {
                userId: realUser.userId,
              },
              hotel: {
                hotelId: hotelCartID,
              },
              note: note,
              isPaid: false,
              orderStatusID: 1,
            
          },{
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${User.jwtToken}`,
            }
          })
          console.log(result.data)
          console.log("order placed sucessfully")
          dispatch(logout())
          cartItem={};
          console.log("Cart item modified")
          setCartItems({});
          navigate(`/restaurants/${hotelCartID}`)
         
      }
      catch(error)
      {
          console.log(error)
      }
  }
  return (
    <div>
          {Object.keys(cartItem).length !== 0 ? (
            <Container>
              <Row className="mb-4">
                
                <Col xs={12}>
                  <Link to="/">
                    <img
                      src={LOGO}
                      alt="Your Logo"
                      className="img-fluid"
                      style={{ height: "100px" }}
                    />
                  </Link>
                </Col>
              </Row>

              <h2 className="my-4">Checkout</h2>

              <Row style={{ border: "2px solid #843de6" }}>
                <Col md={6} style={{ borderRight: "3px solid #843de6" }}>
                  <h4>Shipping Information</h4>
                  <div>
                    <p>
                      <strong>Name:</strong> {realUser.username}
                    </p>
                    <p>
                      <strong>Address:</strong> {{ ...realUser.address }.street2}
                    </p>
                    <p>
                      <strong>LandMark:</strong> {{ ...realUser.address }.landmark}
                    </p>
                    <p>
                      <strong>City:</strong> {{ ...realUser.address }.city}
                    </p>

                    {/* Display more address details as needed */}
                  </div>
                </Col>

                <Col md={6}>
                  <h4>Order Summary</h4>
                  <ul className="list-group">
                    {keys.map((item) => (
                      <CartItem item={item} cartItems={cartItems} />
                    ))}
                    {/* Delivery Fee row */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <div>Delivery Fee</div>
                      <div>
                        $ 70
                      </div>
                    </li>
                  </ul>

                  <div className="mt-3">
                    <h5>Total: ₹{realUser.cartTotal}</h5>
                  </div>

                  <button className="btn btn-outline-primary"><Link to={`/restaurants/${hotelCartID}`} style={{textDecoration:"none"}}>Add More items</Link></button>
                  <div class="form-group" style={{ margin: "20px" }}>
                    <label for="note">Note:</label>
                    <input type="text" class="form-control" id="note" placeholder="Enter your note here..." onChange={(e)=>{setNote(e.target.value)}}/>
                  </div>
                  <div
                    style={{
                      margin: "30px 0 ",
                      padding: "10px 20px",
                      backgroundColor: "#fc8019",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "15px",
                      width: "25%"
                    }}
                    onClick={placeOrder}
                  >
                      PLACE ORDER
                    
                  </div>

                </Col>
              </Row>
            </Container>
          ) : (
            <div className="cart">
              <div className="empty-cart">
                <div
                  style={{
                    height: "calc(100vh - 80px)",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "#fff",
                  }}
                >
                  <div
                    style={{
                      width: "290px",
                      height: "256px",
                      backgroundImage:
                        "url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div
                    style={{
                      marginTop: "24px",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#535665",
                    }}
                  >
                    Your cart is empty
                  </div>

                  <div
                    style={{
                      marginTop: "9px",
                      color: "#7e808c",
                    }}
                  >
                    You can go to home page to view more restaurants
                  </div>

                  <div
                    style={{
                      marginTop: "30px",
                      padding: "10px 20px",
                      backgroundColor: "#fc8019",
                      color: "#fff",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                      SEE RESTAURANTS NEAR YOU
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          )
          }
        
    </div>
  );
};

export default Cart;