import React from 'react';
import {createBrowserHistory} from 'history';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import PizzaList from '../pages/Pizza';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import PlaceOrder from '../pages/PlaceOrder';
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
                <Route path="/" exact component={PizzaList}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/orders" component={Order}/>
                <Route path="/place-order" component={PlaceOrder}/>
            </Switch>
        </Router>
    );
}

export default Routes;