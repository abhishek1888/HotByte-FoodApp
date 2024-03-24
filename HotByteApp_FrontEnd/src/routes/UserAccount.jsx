import React from 'react'
import { IoSettings } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { TbMenuOrder } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userRedux';
import {logout as realLogout} from '../store/realUserRedux';
export const UserAccount = () => {
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const realUser = useSelector((state) => state.realUser.currentRealUser)
 const handlelogout=()=>{
       dispatch(logout());
       dispatch(realLogout());
       navigate("/");
  }
  return (
    <div>
           <div>
                <div  style={{
                    position: 'relative', padding: '0 20px',
                    background: '#37718e',
                    minHeight: '100vh'
                }}>
                    <div  style={{
                        paddingTop: '33px',
                        maxWidth: '1200px',
                        minWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div  style={{
                            color: '#fff',
                            marginBottom: '37px',
                            marginTop: '37px',
                            position: 'relative'
                        }}>
                            
                             <div
                             onClick={handlelogout}
                             style={{
                                float: 'right',
                                position: 'absolute',
                                bottom: '7px',
                                right: '0',
                                border: '1px solid hsla(0, 0%, 100%, .6)',
                                padding: '12px 20px',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}>LogOut</div>
                            <div  style={{
                                fontSize: '32px',
                                fontWeight: '600',
                                textTransform: 'capitalize'
                            }}>{realUser.username}</div>
                            <div  style={{
                                marginTop: '2px',
                                fontSize: '16px'
                            }}>
                                <span>{realUser.userContactNumber}</span>
                                <span  style={{ marginLeft: '15px' }} >{realUser.email}</span>
                            </div>
                            <div>
                                <button><Link to="/" style={{textDecoration:"none", color:"black"}}>Back to mainPage</Link></button>
                             </div>
                        </div>
                    </div>
                    <div  style={{
                        background: '#fff',
                        contain: 'layout',
                        boxShadow: '0 2px 15px 0 rgba(0,0,0,.15)',
                        width: '1300px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        <div ></div>
                        <div  style={{
                            maxWidth: '1200px',
                            minWidth: '1200px',
                            position: 'relative',
                            margin: '0 auto',
                            contain: 'layout',
                            paddingTop: '50px',
                            paddingBottom: '50px'
                        }}>
                            <div  style={{ display: "flex" }}>
                                <div  style={{
                                    minWidth: '260px',
                                    background: '#edf1f7',
                                    minHeight:"500px"
                                }}>
                                    <ul>
                                        <Link to="orders" style={{textDecoration:"none",color:"black"}}>
                                        <li className="list">
                                            <TbMenuOrder style={{ marginRight: '10px' }}/>
                                            <span >Orders</span>
                                        </li>
                                        </Link>
                                        <Link to="Addresses" style={{textDecoration:"none",color:"black"}}>
                                        <li className="list">
                                           
                                            <MdOutlineMyLocation style={{ marginRight: '10px' }}/>
                                            <span >Addresses</span>
                                        </li>
                                        </Link>
                                        <Link to="Update_Profile" style={{textDecoration:"none",color:"black"}}>
                                        <li className="list">
                                          
                                            <IoSettings style={{ marginRight: '10px' }}/>
                                            <span >Update Profile</span>
                                        </li>
                                        </Link>
                                    </ul>
                                     
                                </div>
                                <Outlet/>
                                
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
