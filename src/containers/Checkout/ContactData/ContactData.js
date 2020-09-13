import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../../store/actions/index.js";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderPancake(order);
  };

  checkValidity = (value, rules) => {
    let isValid = false;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "";
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormEl = { ...updatedOrderForm[inputIdentifier] };

    updatedFormEl.value = event.target.value;
    updatedFormEl.valid = this.checkValidity(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updatedFormEl.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormEl;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    const formElementsArr = [];
    for (let key in this.state.orderForm) {
      formElementsArr.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArr.map((formEl) => (
          <Input
            touched={formEl.config.touched}
            changed={(event) => this.inputChangedHandler(event, formEl.id)}
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            invalid={!formEl.config.valid}
            shouldValidate={formEl.config.validation}
          />
        ))}
        <Button
          btnType="Success"
          disabled={!this.state.formIsValid}
          click={this.orderHandler}
        >
          COMPLETE ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
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

const mapStateToProps = (state) => {
  return {
    ing: state.pancakeBuild.ingredients,
    price: state.pancakeBuild.totalPrice,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderPancake: (orderData) => dispatch(actions.purchasePancake(orderData)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
