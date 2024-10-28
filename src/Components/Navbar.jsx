import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";

const Navbar = ({setShowCart}) => {
  
  const handelcart=()=>{
    setShowCart(true)
  }
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
          <FaHome className="icon" />
        </Link>
        <Link to="/about" className="nav-icon">
          <FcAbout className="icon" />
        </Link>
        <Link to="/contact" className="nav-icon">
          <IoIosContacts className="icon" />
        </Link>

        <Link to="/loginpage" className="nav-icon">
          <IoLogIn className="icon" />
        </Link >
       
        <Link to="/cart">
        <button onClick={handelcart}>Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
