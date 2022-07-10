import React from "react";
import styles from "./HeaderLink.module.css";

const HeaderLinks = () => {
  return (
    <div className={styles.links}>
      <a className={styles.tag} href="url">
        Sell on Shopping
      </a>
      <a className={styles.tag} href="url">
        Register
      </a>
    </div>
  );
};

export default HeaderLinks;
