import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-container">
      <p className="title">{props.title}</p>
      <img src={props.image} className="product-img" />
      <div className="card-wrapper">
        <p className="price">{props.price}</p>
        <button className="button-5">View</button>
      </div>
      {props.availability && props.availability === "Y" ? (
        <p className="product-stock product-success">in stock</p>
      ) : (
        <p className="product-stock product-danger">out of stock</p>
      )}
    </div>
  );
};

export default ProductCard;
