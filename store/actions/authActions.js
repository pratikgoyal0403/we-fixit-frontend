import Api from "../../utils/Api";
import * as types from "../types";
import { setToken, getToken } from "../../utils/token-handler";
import { toast } from "react-toastify";

// export const saveHash = (hash) => {
//   return {
//     type: types.SAVE_USER_AUTH_HASH,
//     payload: hash,
//   };
// };

// export const requestForOtp = (payload) => async (dispatch) => {
//   try {
//     const response = await Api.post("/user/request-otp", payload);
//     if (response.status >= 400) {
//       //error handling
//       console.log(response);
//       return;
//     }
//     // console.log(response);
//     const result = await response.data;
//     // console.log(result.hash);
//     dispatch(saveHash(result.hash));
//   } catch (err) {
//     console.log(err);
//   }
// };

const saveUserInfo = (payload) => {
  return {
    type: types.LOGIN_USER,
    payload,
  };
};

export const autoLogin = () => async (dispatch) => {
  try {
    const token = getToken();
    // console.log(token);
    const response = await Api.get("/user/auto-login", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    if (result.response) {
      dispatch(saveUserInfo(result.response));
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await Api.post("/user/login", payload);
    if (response.status >= 400) {
      //error handling;
      console.log(response);
      return;
    }
    // console.log(response);
    const result = await response.data;
    // console.log(result);
    setToken(result.token);
    dispatch(saveUserInfo(result.user));
    window.location.reload();
  } catch (err) {
    toast.error(err.response.data.message);
    console.log(err);
  }
};

export const adminLogin = (payload, router) => async (dispatch) => {
  try {
    const response = await Api.post("/user/admin-login", payload);
    const result = await response.data;
    setToken(result.token);
    dispatch(saveUserInfo(result.user));
    router.push("/admin/dashboard");
  } catch (err) {
    toast.error(err.response.data.message);
    console.log(err);
  }
};

export const signup = (payload) => async (dispatch) => {
  try {
    const response = await Api.post("/user/signup", payload);
    const result = await response.data;
    console.log(result);
    toast.success("signup successful Please login");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
