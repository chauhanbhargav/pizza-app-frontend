import React, { useEffect } from "react";
import { Card } from "antd";

import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Loading from "../../components/Loading";

const Order = ({ getOrder, isLoading, orders }) => {
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
        />
    );
  };

  const renderOrders = () => {
    console.log('order----', orders);
    return orders.map((order, index) => (
      <Card
        className="orderCard"
        style={{ marginBottom: "20px" }}
        title={`Items: ${order.total_items}, Total: $${order.total_price}`}
        key={`ORDER_${index}`}
      >
        {renderCartItems(order)}
      </Card>
    ));
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="container">
      <Navbar />
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