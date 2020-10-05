import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 2,
      meat: 1,
      salad: 2,
    },
  };
  render() {
    return (
      <Fragment>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>Burger Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
