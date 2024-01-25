import React from "react";
import { IoIosCart } from "react-icons/io";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <div className="container">
      <button className="cart">
        <IoIosCart />
      </button>
    </div>
  );
};

export default CartWidget;
