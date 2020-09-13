import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASED_PANCAKE_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
        purchased: true,
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.PURCHASED_PANCAKE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.PURCHASED_PANCAKE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.PURCHASED_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
