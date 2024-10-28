import React from "react";
import "./Cart.css";

const Cart = ({ ShowCart, setShowCart }) => {
  const handelclose = () => {
    setShowCart(false);
  };
  return (
    <>
      <div className="cart-main-container">
        {ShowCart && (
          <div className="cart-container">
            <button onClick={handelclose} className="close-btn">x</button>

            
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
