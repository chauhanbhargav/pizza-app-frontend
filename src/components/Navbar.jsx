import React from "react";
import { Button, Badge, Radio, message } from "antd";
import {
  FaShoppingCart,
  FaUserAlt,
  FaSignOutAlt,
  FaShoppingBag,
  FaDollarSign,
  FaEuroSign
} from "react-icons/fa";
import { connect } from "react-redux";

import { logout, setCurrency } from "../store/actions";
import { NavLink, Redirect } from "react-router-dom";
import { DOLLAR, EURO } from "../utils/constants";
import {
    setCurrentCurrency
} from '..//utils/getCurrency';

const Navbar = ({ cartItems, user, logout, currency, setCurrency, history }) => {

  const changeCurrency = (value) => {
    setCurrentCurrency(value);
    setCurrency(value)
    message.success(`Currency changed to ${value.toLowerCase()}`)
  }

  return (
    <header>
      <div className="navLogoContainer">
        <NavLink to="/" className="navLogo">
          Pizza Application
        </NavLink>
      </div>
      <ul className="navLinks">
        <li>
            <Radio.Group defaultValue={currency} onChange={(e) => changeCurrency(e.target.value) }>
                <Radio.Button value={DOLLAR}><FaDollarSign /></Radio.Button>
                <Radio.Button value={EURO}><FaEuroSign /></Radio.Button>
            </Radio.Group>
        </li>
        <li>
          <Badge count={cartItems.length}>
            <NavLink to="/cart" className="navLogo">
                <Button
                shape="circle"
                icon={<FaShoppingCart />}
                size="large"
                />  
            </NavLink>
          </Badge>
        </li>
        {user && (
          <li>
              <NavLink to="/orders" className="navLogo">
                <Button
                    shape="circle"
                    icon={<FaShoppingBag />}
                    size="large"
                />
              </NavLink>
          </li>
        )}
        {user && (
          <li>
            <Button
              shape="circle"
              icon={<FaSignOutAlt />}
              size="large"
              onClick={() => {
                logout();
                message.success('Logged out successfully');
                history.push('/')
              }}
            />
          </li>
        )}
        {!user && (
          <li>
              <NavLink to="/signin" className="navLogo">
                <Button
                    shape="circle"
                    icon={<FaUserAlt />}
                    size="large"
                />
              </NavLink>
            
          </li>
        )}
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    cartItems: state.cartReducer.cartItems,
    currency: state.currencyReducer.currency,
  };
};

const mapDispatchToProps = {
  logout,
  setCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
