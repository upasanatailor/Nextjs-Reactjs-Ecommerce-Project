import React from "react";
import CategoryHeader from "../../modules/CategoryHeader";

import FeaturedProduct from "../../modules/FeaturedProduct";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <CategoryHeader />
      </div>

      <div className={styles.productdata}>
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default MainContainer;
