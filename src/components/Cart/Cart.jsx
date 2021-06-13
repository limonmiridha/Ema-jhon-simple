import React from "react";
import Product from "../Product/Product";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = parseFloat(total / 10);
  const grandTotal = total + shipping + tax;
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div className="cart">
      <div className="cart-content">
        <h2 style={{textAlign:'center'}}>Order Summery</h2>
        <h3 style={{textAlign:'center'}}>Items Order : {cart.length}</h3>
        <br />
        <p>Product Price : {formatNumber(total)}</p>
        <p>Shipping Cost : {formatNumber(shipping)}</p>
        <p>Tax : {formatNumber(tax)}</p>
        <p>Total Price: {formatNumber(grandTotal)}</p>
        {
          props.children
        }
      </div>
    </div>
  );
};

export default Cart;
