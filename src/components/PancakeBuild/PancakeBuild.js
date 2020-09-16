import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import Aux from "../../hoc/Aux";
import Pancake from "../../components/Pancake/Pancake";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../store/actions/index";

const PancakeBuild = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    props.onInitIngredients();
  }, []);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHander = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.onInitPurchased();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.ings,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  let pancake = props.error ? <p>Ingredients Can't be Loaded</p> : <Spinner />;
  if (props.ings) {
    pancake = (
      <Aux>
        <Pancake ingredients={props.ings} />
        <BuildControls
          isAuth={props.isAuthenticated}
          ingredientAdded={props.onIngAdded}
          ingredientRemoved={props.onIngRemoved}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.ings)}
          ordered={purchaseHander}
          price={props.price}
        />
      </Aux>
    );

    orderSummary = (
      <OrderSummary
        price={props.price}
        ingredients={props.ings}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }
  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {pancake}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    ings: state.pancakeBuild.ingredients,
    price: state.pancakeBuild.totalPrice,
    error: state.pancakeBuild.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchased: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(PancakeBuild, axios));
