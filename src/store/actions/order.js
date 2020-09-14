import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const purchasedPancakeSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASED_PANCAKE_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchasedPancakeFailed = (error) => {
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
        dispatch(purchasedPancakeSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchasedPancakeFailed(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASED_INIT,
  };
};

export const fetchOrdersSucess = (orders) => {
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
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams =
      "/?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("order.json" + queryParams)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSucess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
