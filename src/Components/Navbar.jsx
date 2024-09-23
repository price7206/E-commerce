import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="nav-and-search-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaoksmF8c11RJ0tRfACxjKlsvLZiaAWrNXw&s"
          className="logo"
        />
        <input type="text" className="search-bar" />
      </div>
      <div className="nav-link">
        <Link to="/" className="nav-icon">
          Home
        </Link>
        <Link to="/about" className="nav-icon">
          About
        </Link>
        <Link to="/contact" className="nav-icon">
          Contact
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
