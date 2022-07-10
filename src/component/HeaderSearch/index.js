import React from "react";
import styles from "./HeaderSearch.module.css";

const Headersearch = () => {
  return (
    <div>
      <input
        className={styles.search}
        type="search"
        placeholder="useless item on white background"
      />
      <a className={styles.tag} href="url">
        Consumer Electronics
      </a>
    </div>
  );
};

export default Headersearch;
