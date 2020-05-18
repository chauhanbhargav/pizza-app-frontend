import {
    AUTH_WATCHER,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    SIGNUP_WATCHER,
    LOG_OUT_WATCHER,
    LOG_OUT_SUCCESS,
} from "../constants";

const initialState = {
    user: null,
    token: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_WATCHER:
        case SIGNUP_WATCHER:
            return {
                ...state,
                user: null,
                token: null,
                error: null
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                user: {...action.payload.user},
                token: action.payload.user.token,
                error: null
            };
        case AUTH_FAILURE:
            return {
                ...state,
                user: null,
                token: null,
                error: action.payload
            };
        case LOG_OUT_WATCHER:
            return {
                ...state
            };
        case LOG_OUT_SUCCESS: 
            return {
                ...initialState
            };
        default:
            return {
                ...state
            };
    }
};