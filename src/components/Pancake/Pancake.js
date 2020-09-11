import React from "react";
import classes from "./Pancake.module.css";
import PancakeIng from "./PancakeIng/PancakeIng";
// import { withRouter } from "react-router-dom";

const pancake = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <PancakeIng key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients === 0) {
    transformedIngredients = (
      <p>Build your Pancake! Start Adding your Ingredients</p>
    );
  }
  return (
    <div className={classes.Pancake}>
      {transformedIngredients}
      <PancakeIng type="pancake" />
    </div>
  );
};

export default pancake;
