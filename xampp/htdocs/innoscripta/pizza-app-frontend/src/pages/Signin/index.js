import {
    connect
} from 'react-redux';
import SignIn from './view';
import {
    authWatcher,
    setAuthError
} from '../../store/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        isLoading: state.loaderReducer.loader,
        error: state.authReducer.error,
        user: state.authReducer.user,
    };
};

const mapDispatchToProps = {
    authWatcher,
    setAuthError,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));