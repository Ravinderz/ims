import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products?limit=20",
    })
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  let products = [];

  data.forEach((elm) => {
    products.push(
      <ProductCard
        key={elm.id}
        title={elm.title}
        availability="Y"
        image={elm.image}
        price={elm.price}
      />
    );
  });

  return <div className="home-container">{products}</div>;
};

export default Home;
