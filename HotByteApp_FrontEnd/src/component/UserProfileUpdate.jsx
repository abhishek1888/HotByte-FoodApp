import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../store/realUserRedux'

const UserProfileUpdate = () => {
const realUser = useSelector((state) => state.realUser.currentRealUser)
const User = useSelector((state) => state.user.currentUser)
const navigate= useNavigate();
const dispatch=useDispatch()
const [formData, setFormData] = useState({
    userId: realUser.userId,
    username: realUser.username,
    email: realUser.email,
    userGender: realUser.userGender,
    userContactNumber: realUser.userContactNumber,
    address: {
      addressID: {...realUser.address}.addressID,
      street1: {...realUser.address}.street1,
      street2: {...realUser.address}.street2,
      landmark: {...realUser.address}.landmark,
      city: {...realUser.address}.city,
      postalCode: {...realUser.address}.postalCode
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const result= await axios.put("http://localhost:8080/user/update-user",formData,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${User.jwtToken}`,
            }
        })
        console.log(result.data);
        
        dispatch(addUser(result.data))
        navigate("/account");
    }
    catch(error)
    {
        console.log(error);
    }
    
  };

  return (
    <div className="container" style={{ width: "50%" }}>
      <h2>User Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userGender">Gender:</label>
          <input
           type="text"
            className="form-control"
            id="userGender"
            name="userGender"
            value={formData.userGender}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userContactNumber">Contact Number:</label>
          <input
            type="text"
            className="form-control"
            id="userContactNumber"
            name="userContactNumber"
            value={formData.userContactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street1">Street 1:</label>
          <input
            type="text"
            className="form-control"
            id="street1"
            name="street1"
            value={formData.address.street1}
            onChange={(e) => handleChange({ target: { name: 'address', value: { ...formData.address, street1: e.target.value } } })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street2">Street 2:</label>
          <input
            type="text"
            className="form-control"
            id="street2"
            name="street2"
            value={formData.address.street2}
            onChange={(e) => handleChange({ target: { name: 'address', value: { ...formData.address, street2: e.target.value } } })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="landmark">Landmark:</label>
          <input
            type="text"
            className="form-control"
            id="landmark"
            name="landmark"
            value={formData.address.landmark}
            onChange={(e) => handleChange({ target: { name: 'address', value: { ...formData.address, landmark: e.target.value } } })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.address.city}
            onChange={(e) => handleChange({ target: { name: 'address', value: { ...formData.address, city: e.target.value } } })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            name="postalCode"
            value={formData.address.postalCode}
            onChange={(e) => handleChange({ target: { name: 'address', value: { ...formData.address, postalCode: e.target.value } } })}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}



export default UserProfileUpdate
