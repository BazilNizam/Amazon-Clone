import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/2019Retention/PYA/in_prime_pya_1500x400_header.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping basket </h2>

          {/* basketitem */}
          {/* basketitem */}
          {/* basketitem */}
          {/* basketitem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
