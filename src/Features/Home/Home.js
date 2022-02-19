import React from "react";
import ProductCard from "../../Components/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <ProductCard
        title="ASUS RTX 3070 8GB ddr5 GPU"
        availability="Y"
        image="asus_3070_tuf.jpg"
        price="Rs 64000"
      />
      <ProductCard
        title="ASUS RTX 3070 8GB ddr5 GPU"
        availability="N"
        image="asus_3070_tuf.jpg"
        price="Rs 64000"
      />
    </div>
  );
};

export default Home;
