import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import Cart from '../Cart/Cart'
import happyImg from '../../images/giphy.gif'
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced,setOrderPlaced] = useState(false)
  const handlePlaceOrder = () => {
    setCart([])
    setOrderPlaced(true)
    processOrder();

  }

  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  let thankyou;
  if(orderPlaced){
    thankyou = <img src={happyImg} alt='thank you'/>
  }
  return (
    <div className='shop-container'>
      <div className="product-container">
      {cart.map((pd) => (
        <ReviewItem
          handleRemoveProduct={handleRemoveProduct}
          key={pd.key}
          product={pd}
        ></ReviewItem>
      ))}
      {
        thankyou
      }
      </div>
      <div className="cart-container">
          <Cart cart={cart}>
            <Link to='review'>
              <button onClick={handlePlaceOrder} className="btn">Place order</button>
            </Link>
          </Cart>
      </div>
    </div>
  );
};

export default Review;
