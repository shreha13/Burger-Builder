import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((i) => {
    return (
      <li key={i}>
        <span style={{ textTransform: "capitalize" }}>{i}</span>:{" "}
        {props.ingredients[i]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p><strong>Total Price- {props.price.toFixed(2)}</strong></p>
      <p>It is a delicious burger containing the following items:</p>
      <ul>{ingredients}</ul>
      <Button clicked={props.cancelClick} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.continueClick} btnType="Success">
        Continue
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
