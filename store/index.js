import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
const bindMiddleware = (middleware) => {
  //this varible is set automatically by next js and yeild whether is production or devlelopment
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const rootReducer = (state, actions) => {
  if (actions.type === HYDRATE) {
    console.log(state, actions);
    return {
      ...state,
      ...actions.payload,
    };
  } else {
    return allReducers(state, actions);
  }
};

const initStore = () => {
  return createStore(rootReducer, bindMiddleware([thunk]));
};

// const makeStore = () =>
//   createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(initStore);


/*

Paras Arora10:59
 switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case 'SERVER_ACTION':
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case 'CLIENT_ACTION':
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
*/