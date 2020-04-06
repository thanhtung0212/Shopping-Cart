import { combineReducers } from "redux";
import products from "./product";
import cart from "./cart";
import message from "./message";

const appReducers = combineReducers({
  products,
  message,
  cart,
});

export default appReducers;
