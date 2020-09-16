import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const purchasePancakeSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASED_PANCAKE_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchasePancakeFailed = (error) => {
  return {
    type: actionTypes.PURCHASED_PANCAKE_FAILED,
    error: error,
  };
};

export const purchasePancakeStart = () => {
  return {
    type: actionTypes.PURCHASED_PANCAKE_START,
  };
};
export const purchasePancake = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchasePancakeStart());
    axios
      .post("/order.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchasePancakeSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchasePancakeFailed(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASED_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};
export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId,
  };
};
