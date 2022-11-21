import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./toolkit/cart/cart.slice";
import productReducer from "./toolkit/product/product.slice";

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
});

export default rootReducer;
