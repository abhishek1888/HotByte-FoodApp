import React, { useState } from "react";
import { useSelector } from "react-redux";
import HotelService from "../services/HotelService";
import axios from "axios";

const DashboardAddMenu = () => {
  const hotel = useSelector((state) => state.hotel.currentHotel);
  const User = useSelector((state) => state.user.currentUser)
  const [formData, setFormData] = useState({
    menuItemName: "",
    hotelID: hotel.hotelId,
    menuItemImage: "",
    menuItemPrice: 0,
    menuItemType: "",
    menuItemDescription: "",
    isVeg: "Yes",
    menuItemRating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result= await axios.post("http://localhost:8080/hotel/add-menuitem",formData,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${User.jwtToken}`,
        }
      })
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      menuItemName: "",
      hotelID: hotel.hotelId,
      menuItemImage: "",
      menuItemPrice: 0,
      menuItemType: "",
      menuItemDescription: "",
      isVeg: "Yes",
      menuItemRating: 0,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="menuItemName" className="form-label">
            Menu Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="menuItemName"
            name="menuItemName"
            value={formData.menuItemName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="menuItemImage" className="form-label">
            Menu Item Image
          </label>
          <input
            type="text"
            className="form-control"
            id="menuItemImage"
            name="menuItemImage"
            value={formData.menuItemImage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="menuItemPrice" className="form-label">
            Menu Item Price
          </label>
          <input
            type="number"
            className="form-control"
            id="menuItemPrice"
            name="menuItemPrice"
            value={formData.menuItemPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="menuItemType" className="form-label">
            Menu Item Type
          </label>
          <input
            type="text"
            className="form-control"
            id="menuItemType"
            name="menuItemType"
            value={formData.menuItemType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="menuItemDescription" className="form-label">
            Menu Item Description
          </label>
          <textarea
            className="form-control"
            id="menuItemDescription"
            name="menuItemDescription"
            value={formData.menuItemDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isVeg" className="form-label">
            Is Veg?
          </label>
          <select
            className="form-select"
            id="isVeg"
            name="isVeg"
            value={formData.isVeg}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="menuItemRating" className="form-label">
            Menu Item Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="menuItemRating"
            name="menuItemRating"
            value={formData.menuItemRating}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardAddMenu;