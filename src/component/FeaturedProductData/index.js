import React from "react";
import styles from "./FeaturedProductData.module.css";
import Image from "next/image";

const FeaturedProductData = (props) => {
  const {
    value: { category, image, price, title },
  } = props;
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          className={styles.logo}
          src={image}
          alt="logo-image"
          height={120}
          width={100}
        />
      </div>
      <p className={styles.productpara}>{title}</p>

      <h2 className={styles.numtext}>${price}</h2>
      <p className={styles.productpara}>{category}</p>
      <div className={styles.bottomitem}>
        <button className={styles.button}>Pay Now</button>
      </div>
    </div>
  );
};

export default FeaturedProductData;
