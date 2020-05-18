import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import pizza from "./pizza";
import loader from "./loader";
import orders from "./orders";

const rootReducers = combineReducers({
  authReducer: auth,
  pizzasReducer: pizza,
  cartReducer: cart,
  loaderReducer: loader,
  ordersReducer: orders,
});

export default rootReducers;