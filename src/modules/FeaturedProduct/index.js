import React, { useState, useEffect } from "react";
import styles from "./FeaturedProduct.module.css";
import FeaturedProductData from "../../component/FeaturedProductData";
import axios from "axios";
import Modal from "react-modal";
import PaymentModel from "../../component/PaymentModel";

const FeaturedProduct = () => {
  const [products, setProducts] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [singleProductDataValues, setSingleProductDataValues] = useState(null);

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

  const handleOpenModel = (singleProductData) => {
    setSingleProductDataValues(singleProductData);
    setIsModelOpen(true);
  };

  return (
    <div className={styles.container}>
      <Modal isOpen={isModelOpen} contentLabel="Payment Proceed">
        <PaymentModel
          setIsModelOpen={setIsModelOpen}
          singleProductDataValues={singleProductDataValues}
        />
      </Modal>

      {products &&
        products.map((value) => {
          return (
            <FeaturedProductData
              handleOpenModel={handleOpenModel}
              value={value}
            />
          );
        })}
    </div>
  );
};

export default FeaturedProduct;
