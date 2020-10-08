import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((i) => (
        <BuildControl
          addIng={() => props.addIngredient(i.type)}
          removeIng={() => props.removeIngredient(i.type)}
          disabledIn={props.disabledInfo[i.type]}
          key={i.label}
          label={i.label}
          type={i.type}
        />
      ))}
      <button className={classes.OrderButton} onClick={props.purchasing} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
