import React from "react";
import "./SidePanel.css";

import { Link } from "react-router-dom";

const Sidepanel = () => {
  return (
    <div className="sidepanel-container">
      <Link to="/admin/dashboard" className="sidepanel-icons">
        Dashboard
      </Link>
      <Link to="/admin/product" className="sidepanel-icons">
        Product
      </Link>
      <Link to="/admin/category" className="sidepanel-icons">
        Category
      </Link>
    </div>
  );
};

export default Sidepanel;
