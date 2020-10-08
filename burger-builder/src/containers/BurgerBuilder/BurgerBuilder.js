import React, { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import classes from "./BuilderBuilder.module.css";

import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const ing_price = {
  cheese: 0.4,
  salad: 0.5,
  bacon: 0.7,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  setPurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map((i) => ingredients[i])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continue");
    this.purchaseCancelHandler();
  };

  addIngredientHandler = (type) => {
    const ingredientCount = this.state.ingredients[type];
    const newCount = ingredientCount + 1;
    let ingredients = { ...this.state.ingredients };
    ingredients[type] = newCount;
    const totalPrice = this.state.totalPrice;
    const newPrice = totalPrice + ing_price[type];
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.setPurchasable(ingredients);
  };

  removeIngredientHandler = (type) => {
    const ingredientCount = this.state.ingredients[type];
    if (ingredientCount <= 0) {
      return;
    }
    const newCount = ingredientCount - 1;
    let ingredients = { ...this.state.ingredients };
    ingredients[type] = newCount;
    const totalPrice = this.state.totalPrice;
    const newPrice = totalPrice - ing_price[type];
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.setPurchasable(ingredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            continueClick={this.purchaseContinueHandler}
            cancelClick={this.purchaseCancelHandler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modal>
        <p className={classes.Price}>
          Current Price: {this.state.totalPrice.toFixed(2)}
        </p>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BuildControls
          purchasable={this.state.purchasable}
          disabledInfo={disabledInfo}
          purchasing={this.purchaseHandler}
          removeIngredient={this.removeIngredientHandler}
          addIngredient={this.addIngredientHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
