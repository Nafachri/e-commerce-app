import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import handleCart from "./reducer/handleCart";

const reducer = combineReducers({
  handleCart,
});

const store = configureStore({
  reducer,
});

export default store;
