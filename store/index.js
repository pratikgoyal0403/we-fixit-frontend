import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/";
import {createWrapper} from 'next-redux-wrapper';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const makeStore = ()=> createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
