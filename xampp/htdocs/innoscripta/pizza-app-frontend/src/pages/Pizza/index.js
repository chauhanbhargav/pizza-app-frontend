import Pizza from './view';
import {
    connect
} from "react-redux";

import {
    getPizza
} from "../../store/actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        isLoading: state.loaderReducer.loader,
    };
};

const mapDispatchToProps = {
    getPizza,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pizza));