import {
    GET_PIZZA_LIST_WATCHER,
    GET_PIZZA_LIST_SUCCESS,
    GET_PIZZA_LIST_FAILURE
} from "../constants";

const initialState = {
    pizzas: [],
};

export default (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case GET_PIZZA_LIST_WATCHER:
            return {
                ...state
            };
        case GET_PIZZA_LIST_SUCCESS:
            return {
                ...state,
                pizzas: [...action.payload.pizzas]
            };
        case GET_PIZZA_LIST_FAILURE:
            return {
                ...state, pizzas: []
            };
        default:
            return {
                ...state
            };
    }
};