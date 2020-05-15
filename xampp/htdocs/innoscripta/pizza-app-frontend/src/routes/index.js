import React from 'react';
import {createBrowserHistory} from 'history';

import {
    Router,
    Route,
    Switch
} from "react-router-dom";

const history = createBrowserHistory();

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/pizza-list" component=""/>
                <Route path="/signin" component=""/>
                <Route path="/signup" component=""/>
                <Route path="/cart" component=""/>
                <Route path="/orders" component=""/>
            </Switch>
        </Router>
    );
}

export default Routes;