import {
    SAVE_ORDER_WATCHER,
    SAVE_ORDER_SUCCESS,
    SAVE_ORDER_FAILURE,

    GET_ORDER_LIST_WATCHER,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAILURE,
    LOG_OUT_SUCCESS,
} from "../constants";

const initialState = {
    orders: [],
    success: null,
    error: null,
};

export default (state = initialState, action) => {
    console.log('action----', action);
    switch (action.type) {
        case GET_ORDER_LIST_WATCHER:
            return {
                ...state,
                success: null,
                error: null,
            };
        case GET_ORDER_LIST_SUCCESS:
            return {
                ...state,
                orders: [...action.payload.orders],
            };
        case GET_ORDER_LIST_FAILURE:
            return {
                ...state,
                orders: [],
                success: null,
                error: action.payload.message,
            };
        case SAVE_ORDER_WATCHER:
            return {
                ...state,
                success: null,
                error: null,
            };
        case SAVE_ORDER_SUCCESS:
            return {
                ...state,
                success: action.payload.message,
                error: null,
            };
        case SAVE_ORDER_FAILURE:
            return {
                ...state,
                orders: [],
                success: null,
                error: action.payload.message,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                orders: []
            };
        default:
            return {
                ...state
            };
    }
};