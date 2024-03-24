import React, { Component } from "react";
import { userInstance } from "../requestMethod";
const BASE_REST_API_URL = "http://localhost:8080";
class AdminService {
  registerHotel(data) {
    return userInstance.post("/admin/register-hotel", data);
  }
}

export default new AdminService();
