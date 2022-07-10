import React from "react";
import styles from "./CategoryHeaderIcon.module.css";

const CategoryHeaderIcon = (props) => {
  const { value } = props;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className="fas fa-cloud"></i>
      </div>
      <div className={styles.heading}>{value}</div>
    </div>
  );
};

export default CategoryHeaderIcon;
