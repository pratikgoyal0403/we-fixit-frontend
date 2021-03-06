import * as types from "../types";

const initialState = {
  allCategories: [],
  services: null,
  serviceDetails: null,
  reviews: [],
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
    case types.SAVE_FETCHED_APP_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}
