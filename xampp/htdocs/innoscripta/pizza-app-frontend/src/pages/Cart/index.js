import {
    connect
} from "react-redux";
import {
    fetchCart,
    removeFromCart,
    updateCart
} from "../../store/actions";

import Cart from './view';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        isLoading: state.loaderReducer.loader,
    };
};

const mapDispatchToProps = {
    fetchCart,
    removeFromCart,
    updateCart,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));