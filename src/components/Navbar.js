import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import "../styles/Navbar.css";
export default function Navbar({ setShow, size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          MaoNau Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <ShoppingCartCheckoutIcon />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}
