import * as types from "../types";

const initialState = {
  allCategories: null,
  services: null,
  serviceDetails: null,
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: [...action.payload],
      };
    case types.SAVE_FETCHED_SERVICES:
      return {
        ...state,
        services: [...action.payload],
      };
    case types.SAVE_FETCHED_SERVICE_DETAIL:
      return {
        ...state,
        serviceDetails: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}
