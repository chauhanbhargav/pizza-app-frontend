import {
    GET_PIZZA_LIST_WATCHER,
    GET_PIZZA_LIST_SUCCESS,
    GET_PIZZA_LIST_FAILURE
} from "../constants";

export const getPizza = (payload) => ({
    type: GET_PIZZA_LIST_WATCHER,
    payload,
});

export const setPizzaSuccess = (payload) => ({
    type: GET_PIZZA_LIST_SUCCESS,
    payload,
});

export const setPizzaError = (payload) => ({
    type: GET_PIZZA_LIST_FAILURE,
    payload,
});