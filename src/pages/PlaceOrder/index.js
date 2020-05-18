import { connect } from "react-redux";
import {
    fetchCart,
    placeOrder,
    setPlaceOrderSuccess,
    setPlaceOrderError,
} from "../../store/actions";
import PlaceOrder from './view';

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        success: state.ordersReducer.success,
        error: state.ordersReducer.error,
        isLoading: state.loaderReducer.loader,
    };
};

const mapDispatchToProps = {
    fetchCart,
    placeOrder,
    setPlaceOrderSuccess,
    setPlaceOrderError,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);