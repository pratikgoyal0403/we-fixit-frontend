import * as types from "../types";
import { getToken } from "../../utils/token-handler";
import Api from "../../utils/Api";
import { toast } from "react-toastify";

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

const addItemToCart = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload,
  };
};
export const saveToCart = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/cart", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    // if (response.status >= 400) {
    //   // error handling;
    //   console.log("inside error handling");
    //   console.log(response);
    //   return;
    // }
    const result = await response.data;
    console.log(result);
    dispatch(addItemToCart(result.response));
    toast.success("service added to cart");
  } catch (err) {
    console.log(err);
    toast.error("please login to add to cart");
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
    toast.error("service removed from cart");
    dispatch(saveUserCart(result.response));
  } catch (err) {
    console.log(err);
  }
};
