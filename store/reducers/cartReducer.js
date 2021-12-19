import * as types from "../types";

const initialState = {
  cart: null,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_USER_CART:
      return {
        ...state,
        cart: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}
