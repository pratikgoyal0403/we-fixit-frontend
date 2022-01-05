import Api from "../../utils/Api";
import { getToken } from "../../utils/token-handler";
import * as types from "../types";

const saveUserProfile = (payload) => {
  return {
    type: types.SAVE_PROFILE,
    payload,
  };
};

export const getUserProfile = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/user/me", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(saveUserProfile(result.response));
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = (payload) => {
  return {
    type: types.UPDATE_USER_PROFILE,
    payload,
  };
};

export const updateUserProfile = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.put("/user/me", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(updateProfile(result.response));
  } catch (err) {
    console.log(err);
  }
};
