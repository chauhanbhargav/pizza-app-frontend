import {
    GET_ORDER_LIST_WATCHER,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAILURE,

    SAVE_ORDER_WATCHER,
    SAVE_ORDER_SUCCESS,
    SAVE_ORDER_FAILURE,
} from "../constants";

export const getOrder = (payload) => ({
    type: GET_ORDER_LIST_WATCHER,
    payload,
});

export const setOrderSuccess = (payload) => ({
    type: GET_ORDER_LIST_SUCCESS,
    payload,
});

export const setOrderError = (payload) => ({
    type: GET_ORDER_LIST_FAILURE,
    payload,
});

export const placeOrder = (payload) => ({
    type: SAVE_ORDER_WATCHER,
    payload,
});

export const setPlaceOrderSuccess = (payload) => ({
    type: SAVE_ORDER_SUCCESS,
    payload,
});

export const setPlaceOrderError = (payload) => ({
    type: SAVE_ORDER_FAILURE,
    payload,
});