import React, { useEffect } from "react";
import styles from "./PaymentModel.module.css";
import shoppingCheckOut from "../../utils/shoppingCheckOut";

const PaymentModel = (props) => {
  const { setIsModelOpen, singleProductDataValues } = props;
  console.log(
    "singleProductDataValues.....PaymentModel",
    singleProductDataValues
  );
  useEffect(() => {
    // Update the document title using the browser API
    shoppingCheckOut();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <form id="checkout-form" className={styles.checkoutform}>
          <div id="card-number" className={styles.cardnumber}></div>
          <label
            for="card-number"
            id="card-number-error"
            className={styles.label}
          ></label>

          <div id="card-cvv" className={styles.cardcvv}></div>

          <label for="card-cvv" id="card-cvv-error"></label>

          <div id="card-expiry" className={styles.cardexpiry}></div>
          <label
            for="card-expiry"
            id="card-expiry-error"
            className={styles.cardexpiryerror}
          ></label>

          <input
            id="pay-button"
            type="submit"
            className={styles.btn}
            value="Pay"
            disabled="true"
          />

          <div id="feedback"></div>
        </form>
      </div>
      <button onClick={() => setIsModelOpen(false)}>Close Modal</button>
    </div>
  );
};

export default PaymentModel;
