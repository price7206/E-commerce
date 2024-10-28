import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Components/Admin/Admin";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Admin/sidebar/Dashboard";

import Category from "./Components/Admin/sidebar/Category";
import LoginPage from "./Pages/LoginPage";
import SignIn from "./Pages/SignIn";
import Addproduct from "./Components/Admin/sidebar/Addproduct";
import Cart from "./Pages/Cart";
import { useState } from "react";

function App() {
  const [ShowCart, setShowCart] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setShowCart={setShowCart} />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart ShowCart={ShowCart} setShowCart={setShowCart}/>} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Addproduct />} />
            <Route path="/admin/category" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
