import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* part of homework */}
              Subtotal (0 items):<strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //homework part
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
