import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import {
    FaDollarSign,
    FaEuroSign
  } from "react-icons/fa";

import { getUUID } from "../../utils/generateUuid";
import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Loading from "../../components/Loading";
import { DeliveryFee, DOLLAR } from "../../utils/constants";
import OrderModel from "../../components/OrderModel";

const Cart = ({
  cartItems,
  fetchCart,
  removeFromCart,
  updateCart,
  isLoading,
  currency,
  placeOrder,
  success,
  error,
  setPlaceOrderSuccess,
  setPlaceOrderError,
  history
}) => {

  const [openStatus, setOpenStatus] = useState(false);

  useEffect(() => {
    fetchCart({ uuid: getUUID() });
  }, []);

  const renderHeading = () => {
    return (
      <div className="cart-heading-container">
        <Row>
          <Col span={12}>
            <p className="cart-heading">Pizza</p>
          </Col>
          <Col span={6}>
            <p className="cart-heading">Quantity</p>
          </Col>
          <Col span={4}>
            <p className="cart-heading" style={{ textAlign: "right" }}>
              Price
            </p>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };

  const currencyIcon = currency === DOLLAR ? <FaDollarSign /> : <FaEuroSign />;

  let totalItemsPrice = 0;
  let price = '';
  cartItems.forEach((cartItem) => {
    price = currency === DOLLAR ? cartItem.pizza_detail.dollar : cartItem.pizza_detail.euro
    totalItemsPrice += price * cartItem.quantity;
  });


  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p className="no-items-cart">No items in the cart</p>;
    }
    return cartItems.map((cartItem, index) => (
      <CartItem
        cartItem={cartItem}
        key={`CART_ITEM_${index}`}
        removeFromCart={removeFromCart}
        updateCart={updateCart}
        price={price}
        currencyIcon={currencyIcon}
        editable
      />
    ));
  };

  return (
    <div className="container">
      <Navbar history={history}/>
      <div className="content-container">
        <div className="cart-container">
          <div className="cart-items-container">
            {cartItems.length > 0 && renderHeading()}
            {renderCartItems()}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-total-container">
            <Row>
              <Col span={12}></Col>
              <Col span={6}></Col>
              <Col span={4}>
                <Row>
                  <Col span={12}>
                    <p className="price-label">Price</p>
                    <p className="price-label">Delivery Fee</p>
                    <p className="total-price-label">Total:</p>
                  </Col>
                  <Col span={12}>
                    <div
                      style={{
                        alignItems: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p className="price-label">{currencyIcon} {totalItemsPrice}</p>
                      <p className="price-label">{currencyIcon} {DeliveryFee}</p>
                      <p className="total-price-label">
                        {currencyIcon} {totalItemsPrice + DeliveryFee}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={2}></Col>
            </Row>
          </div>
          )}
          {cartItems.length > 0 && (
            <div className="cart-order-container">
              <Button
                type="primary"
                onClick={() => setOpenStatus(true)}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
      <OrderModel 
        open={openStatus}
        close={() => setOpenStatus(false)}
        fetchCart={() => fetchCart()}
        placeOrder={(data) => placeOrder(data)}
        isLoading={isLoading}
        success={success}
        error={error}
        setPlaceOrderSuccess={() => setPlaceOrderSuccess()}
        setPlaceOrderError={() => setPlaceOrderError()}
        history={history}
      />
      {isLoading && <Loading />}
    </div>
  );
};

export default Cart;