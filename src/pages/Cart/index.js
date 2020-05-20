import {
    connect
} from "react-redux";
import {
    fetchCart,
    removeFromCart,
    updateCart,
    placeOrder,
    setPlaceOrderSuccess,
    setPlaceOrderError
} from "../../store/actions";

import Cart from './view';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        isLoading: state.loaderReducer.loader,
        currency: state.currencyReducer.currency,
        success: state.ordersReducer.success,
        error: state.ordersReducer.error
    };
};

const mapDispatchToProps = {
    fetchCart,
    removeFromCart,
    updateCart,
    placeOrder,
    setPlaceOrderSuccess,
    setPlaceOrderError
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));