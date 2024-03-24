import React from "react";
import DashboardHeader from "../component/DashboardHeader";
import { Outlet } from "react-router-dom";
import DashboardSidebarAdmin from "../component/DashboardSidebarAdmin";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashboardSidebarAdmin />

      <div style={{ width: "100%" }}>
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
