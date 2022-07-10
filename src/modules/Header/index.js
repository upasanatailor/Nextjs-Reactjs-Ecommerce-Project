import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import HeaderLogo from "../../component/HeaderLogo";
import HeaderLinks from "../../component/HeaderLinks";
import Headersearch from "../../component/HeaderSearch";
import HeaderLogin from "../../component/HeaderLogin";
import HeaderAddCart from "../../component/HeaderAddCart";

const Header = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HeaderLogo />
        <HeaderLinks />
      </div>
      <div style={{ display: "flex" }}>
        <Headersearch />
      </div>
      <div style={{ display: "flex" }}>
        <HeaderLogin />
        <HeaderAddCart />
      </div>
    </div>
  );
};

export default Header;
