import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, img, price, seller, stock, key } = props.product;
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="product" />
      </div>
      <div>
        <h2 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h2>
        <br />
        <p>by : {seller}</p>
        <br />
        <h5>Price : ${price}</h5>
        <br />
        <p>Only {stock} left in stock.</p>
        {props.showAddToCart && <button
          className="main-button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          Add to Cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
