import { combineReducers } from "redux";
import AppReducer from "./appReducer";
import AuthReducer from "./authReducer";

export default combineReducers({
    auth: AuthReducer,
    app: AppReducer
})

