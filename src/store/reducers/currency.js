import {
    SET_CURRENCY,
} from "../constants";

import {
    getCurrentCurrency
} from '../../utils/getCurrency';

const initialState = {
    currency: getCurrentCurrency()
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                currency: action.payload
            };
        default:
            return {
                ...state
            };
    }
};