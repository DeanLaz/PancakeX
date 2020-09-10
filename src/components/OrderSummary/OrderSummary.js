import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";
class OrderSummary extends Component {
  // CHANGE TO FUNCTIONAL COMPONENT
  componentDidUpdate() {
    console.log("UPDATED");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Pancake Order</h3>
        <p>Ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
