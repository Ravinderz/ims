import React from "react";
import "./ProductCard.css";
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard = (props) => {
  return (
    <div className="product-container">
      <div className="title-container">
        <p className="title">{props.title}</p>
      </div>
      <div className="product-content">
        <img src={props.image} className="product-img" />
      </div>

      <div className="product-footer">
        <div className="price">
          <CurrencyRupeeIcon
          />
          <p>
            {props.price}
          </p>
        </div>

        <Button variant="contained" size="small" color="warning">View</Button>
        {/* sx={{ backgroundColor: "#fc521e" }} */}
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
