import * as types from "../types";

const initialState = {
  userInfo: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_PROFILE:
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    case types.UPDATE_USER_PROFILE:
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}
