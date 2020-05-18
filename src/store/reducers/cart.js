import {
    GET_CART_LIST_WATCHER,
    GET_CART_LIST_SUCCESS,
    GET_CART_LIST_FAILURE,

    SAVE_TO_CART_WATCHER,
    SAVE_TO_CART_SUCCESS,
    SAVE_TO_CART_FAILURE,

    REMOVE_FROM_CART_WATCHER,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,

} from "../constants";

const initialState = {
    cartItems: [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_CART_LIST_WATCHER:
            return {
                ...state
            };
        case GET_CART_LIST_SUCCESS:
            return {
                ...state,
                cartItems: [...action.payload.cart]
            };
        case GET_CART_LIST_FAILURE:
            return {
                ...state,
                cartItems: []
            };
        case SAVE_TO_CART_WATCHER:
        case SAVE_TO_CART_FAILURE:
            return {
                ...state,
                cartItems: []
            };
        case SAVE_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...action.payload.cart]
            };
        case REMOVE_FROM_CART_WATCHER:
        case REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                cartItems: []
            };
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...action.payload]
            };
        default:
            return {
                ...state
            };
    }
};