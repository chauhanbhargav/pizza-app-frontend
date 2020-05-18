import React from "react";
import { Button, Badge } from "antd";
import {
  FaShoppingCart,
  FaUserAlt,
  FaSignOutAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { connect } from "react-redux";

import { logout } from "../store/actions";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartItems, user }) => {
  return (
    <header>
      <div className="navLogoContainer">
        <NavLink to="/" className="navLogo">
          Pizza Application
        </NavLink>
      </div>
      <ul className="navLinks">
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
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
