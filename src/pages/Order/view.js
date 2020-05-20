import React, { useEffect } from "react";
import { Card } from "antd";

import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Loading from "../../components/Loading";
import { DOLLAR } from "../../utils/constants";
import {
    FaDollarSign,
    FaEuroSign
} from "react-icons/fa";
import moment from 'moment';

const Order = ({ getOrder, isLoading, orders, history }) => {

  const renderCartItems = (cartItem) => {
    if (!cartItem) {
      return <p className="no-items-cart">No items in the cart</p>;
    }
    return (
        <CartItem
            cartItem={cartItem.order_detail}
            key={`CART_ITEM`}
            editable={false}
            date={cartItem.created_at}
            price={cartItem.currency === DOLLAR ? cartItem.order_detail.pizza_detail.dollar : cartItem.order_detail.pizza_detail.euro}
            currencyIcon={cartItem.currency === DOLLAR ? <FaDollarSign /> : <FaEuroSign />}
        />
    );
  };

  const renderOrders = () => {
    return orders.map((order, index) => {
      let icon = order.currency === DOLLAR ? <FaDollarSign /> : <FaEuroSign />;
      let price = order.currency === DOLLAR ? order.order_detail.pizza_detail.dollar : order.order_detail.pizza_detail.euro;
      return (
        <Card
            className="orderCard"
            style={{ marginBottom: "20px" }}
            title={`Name: ${order.name}  |  Order-Date: ${moment(order.created_at).format('MM/DD/YYYY hh:mm A')}`}
            key={`ORDER_${index}`}
        >
            {renderCartItems(order)}
        </Card>
      )
    });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="container">
      <Navbar history={history}/>
      <div className="content-container">
        <div className="cart-container">
          <div className="cart-items-container">{renderOrders()}</div>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Order;