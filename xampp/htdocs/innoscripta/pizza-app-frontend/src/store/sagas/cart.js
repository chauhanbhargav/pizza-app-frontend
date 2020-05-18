import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { API_BASE_URL, SERVER_ERROR_MESSAGE } from "../../utils/constants";
import * as constants from "../constants";
import {
  setCartItems,
  setCartItemsError,
  showLoader,
  hideLoader,
} from "../actions";

function fetchCartApi(uuid) {
  return axios.get(`${API_BASE_URL}cart/${uuid}`, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* fetchCartActionEffect(action) {
  try {
    yield put(showLoader());
    const uuid = action.payload.uuid;
    const response = yield call(fetchCartApi, uuid);
    const pizzas = response.data.meta.status ? response.data.data : [];
    yield put(setCartItems(pizzas));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setCartItemsError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* fetchCartWatcher() {
  yield takeLatest(constants.GET_CART_LIST_WATCHER, fetchCartActionEffect);
}

function addToCartApi(data) {
  return axios.post(`${API_BASE_URL}cart`, data, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* addToCartActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(addToCartApi, action.payload);
    const pizzas = response.data.meta.status ? response.data.data : [];
    yield put(setCartItems(pizzas));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setCartItemsError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* addToCartWatcher() {
  yield takeLatest(constants.SAVE_TO_CART_WATCHER, addToCartActionEffect);
}

function updateCartApi(data) {
  return axios.put(`${API_BASE_URL}cart/${data.uuid}`, data, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* updateCartActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(updateCartApi, action.payload);
    const pizzas = response.data.meta.status ? response.data.data : [];
    yield put(setCartItems(pizzas));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setCartItemsError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* updateCartWatcher() {
  yield takeLatest(constants.UPDATE_CART_WATCHER, updateCartActionEffect);
}

function removeCartApi(cartId) {
  return axios.delete(`${API_BASE_URL}cart/${cartId}`, {
    headers: {
      Accept: "application/json",
    },
  });
}

function* removeCartActionEffect(action) {
  try {
    yield put(showLoader());
    const cartId = action.payload.id;
    const response = yield call(removeCartApi, cartId);
    const pizzas = response.data.meta.status ? response.data.data : [];
    yield put(setCartItems(pizzas));
  } catch (e) {
    const error =
      e.response && e.response.data
        ? e.response.data.meta.message
        : SERVER_ERROR_MESSAGE;
    yield put(setCartItemsError(error));
  } finally {
    yield put(hideLoader());
  }
}

export function* removeCartWatcher() {
  yield takeLatest(constants.REMOVE_FROM_CART_WATCHER, removeCartActionEffect);
}
