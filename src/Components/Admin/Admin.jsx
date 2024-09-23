import React from "react";
import "./Admin.css";
import Sidepanel from "./sidebar/Sidepanel";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="Admin-container">
      <Sidepanel />
      <Outlet />
    </div>
  );
};

export default Admin;
