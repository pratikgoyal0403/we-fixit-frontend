import * as types from "../types";

const initialState = {
  orders: [],
};

export default function Order(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };
    case types.SAVE_NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, { ...action.payload }],
      };
    default:
      return state;
  }
}
