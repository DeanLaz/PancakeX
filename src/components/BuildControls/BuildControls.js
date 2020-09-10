import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Nutella", type: "nutella" },
  { label: "Banana", type: "banana" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Syrup", type: "syrup" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Pancake Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton}>Order Pancake</button>
  </div>
);

export default buildControls;
