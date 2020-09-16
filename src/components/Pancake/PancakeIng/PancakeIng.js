import React from "react";
import PropTypes from "prop-types";

import classes from "./PancakeIng.module.css";

const PancakeIng = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "pancake":
      ingredient = <div className={classes.Pancakes}></div>;
      break;
    case "strawberry":
      ingredient = <div className={classes.Strawberry}></div>;
      break;
    case "banana":
      ingredient = <div className={classes.Banana}></div>;
      break;
    case "nutella":
      ingredient = <div className={classes.Nutella}></div>;
      break;
    case "syrup":
      ingredient = <div className={classes.Syrup}></div>;
      break;
    case "butter":
      ingredient = <div className={classes.Butter}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

PancakeIng.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PancakeIng;
