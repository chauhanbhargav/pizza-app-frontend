import {
    call,
    put,
    takeLatest
} from "redux-saga/effects";
import axios from "axios";

import {
    API_BASE_URL,
    SERVER_ERROR_MESSAGE
} from "../../utils/constants";
import * as constants from "../constants";
import {
    setPizzaSuccess,
    setPizzaError,
    showLoader,
    hideLoader
} from "../actions";

function fetchPizzasApi() {
  return axios.get(`${API_BASE_URL}pizza`, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* fetchPizzasActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(fetchPizzasApi);
    const pizzas = response.data.meta.status ? response.data.data : [];
    yield put(setPizzaSuccess(pizzas));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setPizzaError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchPizzasWatcher() {
  yield takeLatest(constants.GET_PIZZA_LIST_WATCHER, fetchPizzasActionEffect);
}
