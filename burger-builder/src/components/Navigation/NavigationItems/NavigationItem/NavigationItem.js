import classes from "./NavigationItem.module.css";
import React from "react";

const NavigationItem = (props) => (
  <li className={props.active ? classes.active : null}>{props.children}</li>
);

export default NavigationItem