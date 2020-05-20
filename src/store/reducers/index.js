import { combineReducers } from "redux";

import auth from "./auth";
import cart from "./cart";
import pizza from "./pizza";
import loader from "./loader";
import orders from "./orders";
import currency from "./currency";

const rootReducers = combineReducers({
  authReducer: auth,
  pizzasReducer: pizza,
  cartReducer: cart,
  loaderReducer: loader,
  ordersReducer: orders,
  currencyReducer: currency,
});

export default rootReducers;