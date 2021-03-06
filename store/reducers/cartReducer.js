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
    case types.SAVE_NEW_ORDER:
      return {
        ...state,
        cart: null,
      };
    case types.ADD_ITEM_TO_CART:
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
