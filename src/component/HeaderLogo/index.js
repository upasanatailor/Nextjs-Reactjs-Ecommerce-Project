import React from "react";
import Image from "next/image";
import logo from "../../../public/Images/logo.png";
import styles from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo-image" width={50} height={20} />
      <h2 className={styles.text}>Shopping</h2>
    </div>
  );
};

export default HeaderLogo;
