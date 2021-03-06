import Api from "../../utils/Api";
import { getToken } from "../../utils/token-handler";
import * as types from "../types";

const saveCategories = (payload) => {
  return {
    type: types.SAVE_ALL_CATEGORIES,
    payload,
  };
};

export const fetchCategories =
  (query = {}) =>
  async (dispatch) => {
    try {
      const response = await Api.get("/categories", { params: query });
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

const saveServices = (payload) => {
  return {
    type: types.SAVE_FETCHED_SERVICES,
    payload,
  };
};

export const fetchCategoryServices = (categoryId) => async (dispatch) => {
  try {
    const response = await Api.get("/services/" + categoryId);
    if (response.status >= 400) {
      //error handling
      console.log(response);
      return;
    }
    const result = await response.data;
    dispatch(saveServices(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveDetails = (payload) => {
  return {
    type: types.SAVE_FETCHED_SERVICE_DETAIL,
    payload,
  };
};

export const fetchServiceDetails = (serviceId) => async (dispatch) => {
  try {
    const response = await Api.get("/service/" + serviceId);
    if (response.status >= 400) {
      //error handling
      console.log(response);
      return;
    }
    const result = await response.data;
    dispatch(saveDetails(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveAppReviews = (payload) => {
  return {
    type: types.SAVE_FETCHED_APP_REVIEWS,
    payload,
  };
};

export const fetchReviews = () => async (dispatch) => {
  try {
    const response = await Api.get("/app-reviews");
    const result = await response.data;
    dispatch(saveAppReviews(result.response));
  } catch (err) {
    console.log(err);
  }
};

export const contactUs = (payload) => async (dispatch) => {
  try {
    const response = await Api.post("/contact-us");
    const result = await response.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const postReview = (serviceId, payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/review/" + serviceId, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
