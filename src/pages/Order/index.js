import {
    connect
} from "react-redux";
import {
    getOrder
} from "../../store/actions";

import Order from './view';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        orders: state.ordersReducer.orders,
    };
};

const mapDispatchToProps = {
    getOrder,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));