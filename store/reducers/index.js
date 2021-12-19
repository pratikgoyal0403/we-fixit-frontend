import { combineReducers } from "redux";
import AppReducer from "./appReducer";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";
import OrderReducer from "./orderReducer";

export default combineReducers({
  auth: AuthReducer,
  app: AppReducer,
  cart: CartReducer,
  order: OrderReducer,
});
