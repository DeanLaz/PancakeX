import React from "react";

import Pancake from "../../Pancake/Pancake";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Your Delicious Pancake..</h1>
      <div style={{ margin: "auto", width: "80%", height: "200px" }}>
        <Pancake ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        ORDER
      </Button>
    </div>
  );
};

export default checkoutSummary;
