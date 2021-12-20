import { combineReducers } from "redux";
import AppReducer from "./appReducer";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";
import OrderReducer from "./orderReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  auth: AuthReducer,
  app: AppReducer,
  cart: CartReducer,
  order: OrderReducer,
  user: UserReducer,
});
