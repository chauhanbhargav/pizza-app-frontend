import React, { useEffect } from "react";
import { Row, Col, Input, Button, message, Form } from "antd";

import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Loading from "../../components/Loading";
import { DeliveryFee } from "../../utils/constants";
import {getUUID} from '../../utils/generateUuid'

const { TextArea } = Input;

const PlaceOrder = ({
  cartItems,
  fetchCart,
  placeOrder,
  isLoading,
  success,
  error,
  setPlaceOrderSuccess,
  setPlaceOrderError,
  history
}) => {
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
          <Col span={6}>
            <p className="cart-heading" style={{ textAlign: "right" }}>
              Price
            </p>
          </Col>
        </Row>
      </div>
    );
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p className="no-items-cart">No items in the cart</p>;
    }
    return cartItems.map((cartItem, index) => (
      <CartItem
        cartItem={cartItem}
        key={`CART_ITEM_${index}`}
        editable={false}
      />
    ));
  };

  let totalItemsPrice = 0;
  cartItems.forEach((cartItem) => {
    totalItemsPrice += cartItem.pizza_detail.price * cartItem.quantity;
  });

  const onPlaceOrder = (values) => {
    placeOrder({
      cart_uuid: getUUID(),
      ...values,
    });
  };

  useEffect(() => {
    if (!success) return;
    message.success(success);
    fetchCart();
    history.push("/");
    setPlaceOrderSuccess({ message: null });
  }, [success]);

  useEffect(() => {
    if (!error) return;
    message.error(error);
    fetchCart();
    setPlaceOrderError({ message: null });
  }, [error]);

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <div className="cart-container">
          <div className="cart-items-container">
            {cartItems.length > 0 && renderHeading()}
            {renderCartItems()}
          </div>
          <div className="cart-total-container">
            <Row>
              <Col span={12}></Col>
              <Col span={6}></Col>
              <Col span={6}>
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
                      <p className="price-label">${totalItemsPrice}</p>
                      <p className="price-label">${DeliveryFee}</p>
                      <p className="total-price-label">
                        ${totalItemsPrice + DeliveryFee}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Form onFinish={onPlaceOrder}>
          <div className="form-container">
            <p>Delivery Address</p>
            <div className="form-group">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                name="contact_no"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <TextArea rows={3} placeholder="address" />
              </Form.Item>
            </div>
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              Place Order
            </Button>
          </div>
        </Form>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default PlaceOrder;