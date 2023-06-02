import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhander = window.__REDUX_DEVTOOLS_EXTENSIONCOMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhander(applyMiddleware(thunkMiddleware))
);

export default store;
