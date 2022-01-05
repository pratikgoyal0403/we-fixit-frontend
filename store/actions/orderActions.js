import Api from "../../utils/Api";
import { getToken } from "../../utils/token-handler";
import * as types from "../types";
import {toast} from 'react-toastify'

const saveOrders = (payload) => {
  return {
    type: types.SAVE_ORDERS,
    payload,
  };
};

export const getMyOrders = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/orders", {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status >= 400) {
      // error handling
      console.log(response);
      return;
    }
    console.log(result);
    const result = await response.data;
    console.log(result);
    dispatch(saveOrders(result.response));
  } catch (err) {
    console.log(err);
  }
};

const postOrder = (payload) => {
  return {
    type: types.SAVE_NEW_ORDER,
    payload,
  };
};

export const postMyOrder = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/order", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status >= 400) {
      /// error handling
      console.log(response);
      return;
    }
    const result = await response.data;
    dispatch(postOrder(result.response));
    toast.success('Your Order has been placed');
  } catch (err) {
    console.log(err);
  }
};
