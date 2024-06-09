import React from 'react';
import { IoSettings } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { TbMenuOrder } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userRedux';
import { logout as realLogout } from '../store/realUserRedux';

export const UserAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const realUser = useSelector((state) => state.realUser.currentRealUser);
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(realLogout());
    navigate("/");
  }

  return (
    <div style={{ background: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{ padding: '0 20px' }}>
        <div style={{ padding: '20px', background: '#2C3E50', color: '#ECF0F1', borderRadius: '10px', margin: '20px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#E74C3C',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1em',
                float: 'right',
              }}
            >
              Log Out
            </button>
            <div style={{ fontSize: '2em', fontWeight: '600' }}>{realUser.username}</div>
            <div style={{ marginTop: '5px', fontSize: '1em' }}>
              <span>{realUser.userContactNumber}</span>
              <span style={{ marginLeft: '15px' }}>{realUser.email}</span>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#2C3E50' }}>
                <button
                  style={{
                    backgroundColor: '#F39C12',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1em',
                  }}
                >
                  Back to Main Page
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ minWidth: '260px', background: '#ECF0F1', padding: '20px', borderRadius: '10px 0 0 10px' }}>
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li style={{ marginBottom: '15px' }}>
                  <Link to="orders" style={{ textDecoration: 'none', color: '#2C3E50', display: 'flex', alignItems: 'center' }}>
                    <TbMenuOrder style={{ marginRight: '10px' }} />
                    <span>Orders</span>
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link to="addresses" style={{ textDecoration: 'none', color: '#2C3E50', display: 'flex', alignItems: 'center' }}>
                    <MdOutlineMyLocation style={{ marginRight: '10px' }} />
                    <span>Addresses</span>
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link to="update_profile" style={{ textDecoration: 'none', color: '#2C3E50', display: 'flex', alignItems: 'center' }}>
                    <IoSettings style={{ marginRight: '10px' }} />
                    <span>Update Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flexGrow: 1, padding: '20px' }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
