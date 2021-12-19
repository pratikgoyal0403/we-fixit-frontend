import * as types from "../types";
import { getToken } from "../../utils/token-handler";
import Api from "../../utils/Api";

const saveUserCart = (payload) => {
  return {
    type: types.SAVE_USER_CART,
    payload,
  };
};

export const getCart = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/cart", {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status >= 400) {
      ///error handling
      console.log(response);
      return;
    }
    const result = await response.data;
    console.log(result);
    dispatch(saveUserCart(result.response));
  } catch (err) {
    console.log(err);
  }
};

export const saveToCart = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/cart", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.status >= 400) {
      // error handling;
      console.log(response);
      return;
    }
    const result = await response.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteFromCart = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.put("/cart", payload, {
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
    dispatch(saveUserCart(result.response));
  } catch (err) {
    console.log(err);
  }
};
