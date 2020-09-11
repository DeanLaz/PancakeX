import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
      country: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Dean",
        address: {
          street: "Test",
          zipCode: "test",
          country: "Test",
        },
        Email: "Test@",
      },
      deliveryMessage: "Fast",
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street Address"
        />
        <input
          className={classes.Input}
          type="text"
          name="postalCode"
          placeholder="Postal code"
        />
        <Button btnType="Success" click={this.orderHandler}>
          COMPLETE ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Information</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
