import React from "react";
import { Form, redirect } from "react-router-dom";
import AdminService from "../services/AdminService";
import { userInstance } from "../requestMethod";

const UpdateHotel = () => {
  return (
    <div>
      <div class="container mt-5" style={{ width: "60%" }}>
        <Form method="POST">
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="hotelName">Hotel Name</label>
            <input
              type="text"
              class="form-control"
              name="hotelName"
              placeholder="Enter hotel name"
            />
          </div>
          <div class="form-group">
            <label for="street1">Street 1</label>
            <input
              type="text"
              class="form-control"
              name="street1"
              placeholder="Enter street 1"
            />
          </div>
          <div class="form-group">
            <label for="street2">Street 2</label>
            <input
              type="text"
              class="form-control"
              name="street2"
              placeholder="Enter street 2"
            />
          </div>
          <div class="form-group">
            <label for="landmark">Landmark</label>
            <input
              type="text"
              class="form-control"
              name="landmark"
              placeholder="Enter landmark"
            />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              placeholder="Enter city"
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalCode"
              placeholder="Enter postal code"
            />
          </div>
          <div class="form-group">
            <label for="contactNumber">Contact Number</label>
            <input
              type="text"
              class="form-control"
              name="contactNumber"
              placeholder="Enter contact number"
            />
          </div>
          <div class="form-group">
            <label for="description">Hotel Description</label>
            <textarea
              class="form-control"
              name="description"
              rows="3"
              placeholder="Enter hotel description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="imagesList">Hotel Images List</label>
            <input
              type="text"
              class="form-control"
              name="imagesList"
              placeholder="Enter comma-separated image filenames"
            />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" name="isActive" />
            <label class="form-check-label" for="isActive">
              Is Active
            </label>
          </div>
          <div class="form-group">
            <label for="startTiming">Start Timing</label>
            <input type="time" class="form-control" name="startTiming" />
          </div>
          <div class="form-group">
            <label for="endTiming">End Timing</label>
            <input type="time" class="form-control" name="endTiming" />
          </div>
          <div class="form-group">
            <label for="rating">Hotel Rating</label>
            <input
              type="number"
              class="form-control"
              name="rating"
              min="1"
              max="5"
              placeholder="Enter hotel rating"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateHotel;

export async function UpdateHotel(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  const userData = {
    username: postData.username,
    password: postData.password,
    email: postData.email,
    hotelName: postData.hotelName,
    hotelAddress: {
      street1: postData.street1,
      street2: postData.street2,
      landmark: postData.landmark,
      city: postData.city,
      postalCode: postData.postalCode,
    },
    hotelContactNumber: postData.contactNumber,
    hotelDescription: postData.description,
    hotelImagesList: postData.imagesList.split(","),
    hotelIsActive: true,
    hotelStartTiming: postData.startTiming,
    hotelEndTiming: postData.endTiming,
    hotelRating: postData.rating,
  };

  try {
    //const result = await AdminService.registerHotel(userData);
    const response = await userInstance.post("/admin/register-hotel", userData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return null;
}