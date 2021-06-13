import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/index";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart,setCart] = useState([])

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart)
    const previousCart = productKeys.map(existingKey=>{
      const product = fakeData.find(pd => pd.key === existingKey)
      product.quantity =savedCart[existingKey]
      return product;
    })
    setCart(previousCart)
  },[])
  const handleAddProduct = (product)=>{
    const productAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === productAddedKey)
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity =  count;
      const others = cart.filter(pd => pd.key !== productAddedKey)
      newCart = [...others,sameProduct]
    }else{
      product.quantity = 1;
      newCart = [...cart,product]
    }
      setCart(newCart)
      addToDatabaseCart(product.key,count)
  }
  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {products.map((singleproduct) => (
            <Product 
            key = {singleproduct.key}
            showAddToCart={true}
            product={singleproduct}
            handleAddProduct={handleAddProduct}>
            </Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
          <Link to='review'><button className="btn">Review your order</button></Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
