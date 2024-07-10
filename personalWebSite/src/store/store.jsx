import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { globalReducer } from "./reducers/reducers";
import { thunk } from "redux-thunk";
export const store = createStore(globalReducer, applyMiddleware(thunk));
