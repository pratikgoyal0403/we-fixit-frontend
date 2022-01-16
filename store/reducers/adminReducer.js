import * as types from "../types";
const initialState = {
  activeOrder: [],
  services: [],
  categories: [],
  orders: [],
  orderDetail: {},
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ACTIVE_ORDERS:
      return {
        ...state,
        activeOrder: [...action.payload],
      };
    case types.FETCH_ALL_SERVICES:
      return {
        ...state,
        services: [...action.payload],
      };
    case types.SAVE_NEW_SERVICE:
      return {
        ...state,
        services: [...state.services, { ...action.payload }],
      };
    case types.FETCH_ALL_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case types.SAVE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };
    case types.DELETE_CATEGORY:
      const updatedCategories = state.categories.filter(
        (c) => c._id !== action.payload._id
      );
      return {
        ...state,
        categories: updatedCategories,
      };
    case types.FETCH_ALL_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };
    case types.NEW_ORDER_STATUS:
      const aOrders = [...state.activeOrder];
      const index = aOrders.findIndex((o) => o._id === action.payload._id);
      aOrders[index].status = action.payload.status;
      return {
        ...state,
        activeOrder: [...aOrders],
      };
    case types.FETCH_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}
