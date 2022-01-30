import * as types from "../types";
import { deleteToken } from "../../utils/token-handler";

const initialState = {
  hash: null,
  isLoggedIn: false,
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_USER_AUTH_HASH:
      return {
        ...state,
        hash: action.payload,
      };
    case types.LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.LOGOUT:
      deleteToken();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
}
