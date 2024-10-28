import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBelt from "./NavBelt/NavBelt";

const Layout = ({setShowCart}) => {
  return (
    <div>
      <Navbar setShowCart={setShowCart} />
      <NavBelt />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
