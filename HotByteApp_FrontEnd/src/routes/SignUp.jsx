import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import PublicService from "../services/PublicService";

const SignUp = () => {
 // const [user, setUser] = useState({});

  return (
    <div>
      <div class="container" style={{ width: "40%" }}>
        <h2>User Registration Form</h2>
        <Form method="POST">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="userGender">Gender:</label>
            <select class="form-control" id="userGender" name="userGender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="userContactNumber">Contact Number:</label>
            <input
              type="text"
              class="form-control"
              id="userContactNumber"
              name="userContactNumber"
              required
            />
          </div>

          <div class="form-group">
            <label for="street1">Street 1</label>
            <input
              type="text"
              class="form-control"
              id="street1"
              name="street1"
              placeholder="Enter street 1"
              required
            />
          </div>
          <div class="form-group">
            <label for="street2">Street 2</label>
            <input
              type="text"
              class="form-control"
              id="street2"
              name="street2"
              placeholder="Enter street 2"
              required
            />
          </div>
          <div class="form-group">
            <label for="landmark">Landmark</label>
            <input
              type="text"
              class="form-control"
              name="landmark"
              placeholder="Enter landmark"
              required
            />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              placeholder="Enter city"
              required
            />
          </div>
          <div class="form-group">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalCode"
              placeholder="Enter postal code"
              required
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export async function createRegisterAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  const userData = {
    username: postData.username,
    password: postData.password,
    email: postData.email,
    userGender: postData.userGender,
    userContactNumber: postData.userContactNumber,
    address: {
      street1: postData.street1,
      street2: postData.street2,
      landmark: postData.landmark,
      city: postData.city,
      postalCode: postData.postalCode,
    },
  };
  try {
    const result = await PublicService.registerUser(userData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return redirect("/");
}
export default SignUp;
