import React from "react";
import classes from "./PanecakeIng.module.css";

const pancakeIng = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "pancake":
      ingredient = <div className={classes.Pancake}></div>;
      break;
    case "strawberry":
      ingredient = <div className={classes.Strawberry}></div>;
      break;
    case "bannana":
      ingredient = <div className={classes.Bannana}></div>;
      break;
    case "nutella":
      ingredient = <div className={classes.Nutella}></div>;
      break;
    case "syrup":
      ingredient = <div className={classes.Syrup}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default pancakeIng;
