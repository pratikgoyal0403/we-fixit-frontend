import * as types from "../types";

const initialState = {
  allCategories: null,
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: [...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}
