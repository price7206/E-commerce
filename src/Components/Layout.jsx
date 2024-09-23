import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBelt from "./NavBelt/NavBelt";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <NavBelt />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
