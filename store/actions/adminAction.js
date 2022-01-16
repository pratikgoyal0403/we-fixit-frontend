import * as types from "../types";
import Api from "../../utils/Api";
import { toast } from "react-toastify";
import { getToken } from "../../utils/token-handler";

const saveActiveOrders = (payload) => {
  return {
    type: types.FETCH_ACTIVE_ORDERS,
    payload,
  };
};

export const fetchActiveOrders = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/admin/active-orders", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(saveActiveOrders(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveNewOrderStatus = (payload) => {
  return {
    type: types.NEW_ORDER_STATUS,
    payload,
  };
};

export const changeOrderStatus = (id, payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.put("/admin/order/" + id, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(saveNewOrderStatus(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveOrderDetail = (payload) => {
  return {
    type: types.FETCH_ORDER_DETAIL,
    payload,
  };
};

export const fetchOrderDetail = (id) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/admin/order/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    dispatch(saveOrderDetail(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveAllOrders = (payload) => {
  return {
    type: types.FETCH_ALL_ORDERS,
    payload,
  };
};

export const fetchAllOrders = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/admin/orders", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    dispatch(saveAllOrders(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveFetchedServices = (payload) => {
  return {
    type: types.FETCH_ALL_SERVICES,
    payload,
  };
};

export const fetchAllServices = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/admin/services", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    dispatch(saveFetchedServices(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveFetchedCategories = (payload) => {
  return {
    type: types.FETCH_ALL_CATEGORIES,
    payload,
  };
};

export const fetchAllCategories = () => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.get("/admin/categories", {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    dispatch(saveFetchedCategories(result.response));
  } catch (err) {
    console.log(err);
  }
};

const saveNewCategory = (payload) => {
  return {
    type: types.SAVE_CATEGORY,
    payload,
  };
};

export const addNewCategory = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/admin/categories", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(saveNewCategory(result.response));
    toast.success("Category saved successfully");
  } catch (err) {
    toast.error("Something went wrong");
    console.log(err);
  }
};

export const updateCategory = (id, payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.put("/admin/categories/" + id, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    toast.success("category updated successfully");
  } catch (err) {
    toast.error("Something went wrong");
    console.log(err);
  }
};

const saveDeletedCategory = (payload) => {
  return {
    type: types.DELETE_CATEGORY,
    payload,
  };
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.delete("/admin/categories/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    dispatch(saveDeletedCategory(result.response));
    toast.success("category delete successfully");
  } catch (err) {
    toast.error("Something went wrong");
    console.log(err);
  }
};

////////////////////////////////SERVICE CRUD
const saveNewService = (payload) => {
  return {
    type: types.SAVE_NEW_SERVICE,
    payload,
  };
};
export const addNewService = (payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.post("/admin/services", payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    dispatch(saveNewService(result.response));
    toast.success("feature added");
  } catch (err) {
    toast.error("something went wrong");
    console.log(err);
  }
};

export const updateService = (id, payload) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.put("/admin/services/" + id, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
  } catch (err) {
    toast.error("something went wrong");
    console.log(err);
  }
};

export const deleteService = (id) => async (dispatch) => {
  try {
    const token = getToken();
    const response = await Api.delete("/admin/services/" + id, {
      headers: {
        "x-access-token": token,
      },
    });
    const result = await response.data;
    console.log(result);
    toast.success("service deleted successfully");
  } catch (err) {
    toast.error("something went wrong");
    console.log(err);
  }
};
