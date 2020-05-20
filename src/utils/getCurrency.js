import Cookies from "js-cookie";

import {
    CURRENCY_KEY,
    DOLLAR
} from "./constants";

export function getCurrentCurrency() {
    const currency = Cookies.get(CURRENCY_KEY);
    return currency;

}

export function setCurrentCurrency(key) {
    Cookies.set(CURRENCY_KEY, key);
    return key;
}