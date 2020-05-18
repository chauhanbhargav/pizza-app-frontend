import { call, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

import { API_BASE_URL, SERVER_ERROR_MESSAGE } from "../../utils/constants";
import * as constants from "../constants";
import {
  setPlaceOrderSuccess,
  setPlaceOrderError,
  setOrderSuccess,
  setOrderError,
  showLoader,
  hideLoader,
} from "../actions";

function placeOrderApi(data) {
  return axios.post(`${API_BASE_URL}order`, data, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* placeOrderActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(placeOrderApi, action.payload);
    yield put(setPlaceOrderSuccess({ message: response.data.meta.message }));
  } catch (e) {
    yield put(setPlaceOrderError({ message: "Order failed." }));
  } finally {
    yield put(hideLoader());
  }
}

export function* placeOrderWatcher() {
  yield takeLatest(constants.SAVE_ORDER_WATCHER, placeOrderActionEffect);
}

export const getToken = (state) => state.authReducer.token;

function fetchOrdersApi(token) {
  return axios.get(`${API_BASE_URL}orders`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function* fetchOrdersActionEffect() {
  try {
    yield put(showLoader());
    const token = yield select(getToken);
    const response = yield call(fetchOrdersApi, token);
    const orders = response.data.meta.status ? response.data.data : [];
    yield put(setOrderSuccess(orders));
  } catch (e) {
    console.log("error", e);
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setOrderError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchOrdersWatcher() {
  yield takeLatest(constants.GET_ORDER_LIST_WATCHER, fetchOrdersActionEffect);
}
