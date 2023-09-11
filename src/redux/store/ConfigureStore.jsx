import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/RootReducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function ConfigureStore() {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
}
