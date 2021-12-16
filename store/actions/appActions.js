import Api from "../../utils/Api";
import * as types from "../types";

const saveCategories = (payload) => {
  return {
    type: types.SAVE_ALL_CATEGORIES,
    payload,
  };
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await Api.get("/categories");
    if (response.status >= 400) {
      //error occured
      console.log(response);
      return;
    }
    const result = await response.data;
    console.log(result);
    dispatch(saveCategories(result.response));
  } catch (err) {
    console.log(err);
  }
};
