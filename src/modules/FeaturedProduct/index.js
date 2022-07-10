import React, { useState, useEffect } from "react";
import styles from "./FeaturedProduct.module.css";
import FeaturedProductData from "../../component/FeaturedProductdata";
import axios from "axios";

const FeaturedProduct = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success

        setProducts(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {products &&
        products.map((value) => {
          return <FeaturedProductData value={value} />;
        })}
    </div>
  );
};

export default FeaturedProduct;
