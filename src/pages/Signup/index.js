import {
    connect
} from "react-redux";
import {
    signUpWatcher,
    setAuthError
} from "../../store/actions";
import {
    withRouter
} from 'react-router-dom';

import SignUp from './view';

const mapStateToProps = (state) => {
    return {
        isLoading: state.loaderReducer.loader,
        error: state.authReducer.error,
        user: state.authReducer.user,
    };
};

const mapDispatchToProps = {
    signUpWatcher,
    setAuthError,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));