import React, {useEffect} from "react";
import { Input, Button, message, Form,Modal } from "antd";
import {getUUID} from '../utils/generateUuid'
import Loading from "../components/Loading";
import { getCurrentCurrency } from "../utils/getCurrency";

const { TextArea } = Input;

const OrderModel = ({ 
  open,
  close,
  fetchCart,
  placeOrder,
  isLoading,
  success,
  error,
  setPlaceOrderSuccess,
  setPlaceOrderError,
  history 
}) => {
  const onPlaceOrder = (values) => {
    placeOrder({
        cart_uuid: getUUID(),
        currency:getCurrentCurrency(),
        ...values,
    });
  };

  useEffect(() => {
    if (!success) return;
    message.success(success);
    fetchCart();
    close();
    history.push('/')
  }, [success]);

  useEffect(() => {
    if (!error) return;
    message.error(error);
    fetchCart();
    close();
  }, [error]);

  return (
    <div>
        <Modal
            visible={open}
            title="Place Order"
            onCancel={() => close()}
            footer={false}
        >
        <Form onFinish={onPlaceOrder}>
            <div>
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
                <div className="order-form-btn">
                    <Button key="back" onClick={() => close()}>
                        Return
                    </Button>,
                    <Button type="primary" htmlType="submit" loading={isLoading} key="submit">
                        Place Order
                    </Button>
                </div>
            </div>
            </Form>
        </Modal>
        {isLoading && <Loading />}
    </div>
  );
};

export default OrderModel;
