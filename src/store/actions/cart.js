import {
    GET_CART_LIST_WATCHER,
    GET_CART_LIST_SUCCESS,
    GET_CART_LIST_FAILURE,

    SAVE_TO_CART_WATCHER,
    SAVE_TO_CART_SUCCESS,
    SAVE_TO_CART_FAILURE,

    UPDATE_CART_WATCHER,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,

    REMOVE_FROM_CART_WATCHER,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE
} from "../constants";

export const fetchCart = (payload) => ({
    type: GET_CART_LIST_WATCHER,
    payload,
});

export const setCartItems = (payload) => ({
    payload,
    type: GET_CART_LIST_SUCCESS,
});

export const setCartItemsError = (payload) => ({
    payload,
    type: GET_CART_LIST_FAILURE,
});

export const addToCart = (payload) => ({
    payload,
    type: SAVE_TO_CART_WATCHER,
});

export const setAddToCartSuccess = (payload) => ({
    payload,
    type: SAVE_TO_CART_SUCCESS,
});

export const setAddToCartError = (payload) => ({
    payload,
    type: SAVE_TO_CART_FAILURE,
});

export const updateCart = (payload) => ({
    payload,
    type: UPDATE_CART_WATCHER,
});

export const setUpdateCartSuccess = (payload) => ({
    payload,
    type: UPDATE_CART_SUCCESS,
});

export const setUpdateCartError = (payload) => ({
    payload,
    type: UPDATE_CART_FAILURE,
});

export const removeFromCart = (payload) => ({
    payload,
    type: REMOVE_FROM_CART_WATCHER,
});

export const setRemoveFromCartSuccess = (payload) => ({
    payload,
    type: REMOVE_FROM_CART_SUCCESS,
});

export const setRemoveFromCartError = (payload) => ({
    payload,
    type: REMOVE_FROM_CART_FAILURE,
});