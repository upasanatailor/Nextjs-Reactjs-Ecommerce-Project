import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryHeaderIcon from "../../component/CategoryHeaderIcon";
import styles from "./CategoryHeader.module.css";

const CategoryHeader = () => {
  const [label, setLabel] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        // handle success

        setLabel(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {label &&
        label.map((value) => {
          console.log(value);
          return <CategoryHeaderIcon value={value} />;
        })}
    </div>
  );
};

export default CategoryHeader;
